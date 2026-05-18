import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   STATISTICS & REALISTIC OPTIMIZER (Logic Maintained)
========================= */
const MAX_SCORES = [40, 40, 70];
const vecDot = (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
const vecSub = (v1, v2) => [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];

function mul(A, v) {
  return [
    A[0][0] * v[0] + A[0][1] * v[1] + A[0][2] * v[2],
    A[1][0] * v[0] + A[1][1] * v[1] + A[1][2] * v[2],
    A[2][0] * v[0] + A[2][1] * v[1] + A[2][2] * v[2],
  ];
}

function invert3x3(m) {
  const a = m[0][0], b = m[0][1], c = m[0][2], d = m[1][0], e = m[1][1], f = m[1][2], g = m[2][0], h = m[2][1], i = m[2][2];
  const A = e * i - f * h, B = c * h - b * i, C = b * f - c * e;
  const D = f * g - d * i, E = a * i - c * g, F = c * d - a * f;
  const G = d * h - e * g, H = b * g - a * h, I = a * e - b * d;
  const det = a * A + b * D + c * G || 1e-6;
  return [[A/det, B/det, C/det], [D/det, E/det, f/det], [G/det, H/det, I/det]];
}

function computeStats(points) {
  const n = points.length;
  const mean = [
    points.reduce((s, p) => s + p.XGC, 0) / n,
    points.reduce((s, p) => s + p.XHC, 0) / n,
    points.reduce((s, p) => s + p.XMC, 0) / n,
  ];
  const cov = [[0,0,0],[0,0,0],[0,0,0]];
  for (let p of points) {
    const x = [p.XGC - mean[0], p.XHC - mean[1], p.XMC - mean[2]];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += x[i] * x[j];
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) cov[i][j] = cov[i][j] / (n - 1);
    cov[i][i] += 0.05; 
  }
  return { mean, cov };
}

function solveModel(data) {
  const p0 = data.filter(d => d.pass === 0);
  const p1 = data.filter(d => d.pass === 1);
  const s0 = computeStats(p0);
  const s1 = computeStats(p1);
  const pooledCov = s0.cov.map((row, i) => row.map((val, j) => (val + s1.cov[i][j]) / 2));
  const invCov = invert3x3(pooledCov);
  let w = mul(invCov, vecSub(s1.mean, s0.mean));
  w = w.map(v => Math.max(v, 0.01)); 
  const b = -vecDot(w, s0.mean.map((v, i) => (v + s1.mean[i]) / 2));
  return { w, b };
}

/* =========================
   3D COMPONENT (SHARPENED)
========================= */
const CHI95 = 7.815;
function eigen3(A) {
  let M = A.map((r) => [...r]);
  const vecs = [], vals = [];
  for (let i = 0; i < 3; i++) {
    let v = [1, 1, 1];
    for (let j = 0; j < 20; j++) {
      const n = Math.hypot(...mul(M, v)) || 1;
      v = mul(M, v).map(x => x / n);
    }
    const Av = mul(M, v);
    const lambda = v[0] * Av[0] + v[1] * Av[1] + v[2] * Av[2];
    vecs.push(v); vals.push(lambda);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) M[r][c] -= lambda * v[r] * v[c];
  }
  return { vecs, vals };
}

function Ellipsoid({ data, isPass, color }) {
  const subset = useMemo(() => data.filter(d => d.pass === (isPass ? 1 : 0)), [data, isPass]);
  const { mean, scale, matrix } = useMemo(() => {
    if (subset.length < 3) return {};
    const stats = computeStats(subset);
    const { vecs, vals } = eigen3(stats.cov);
    const pairs = vals.map((v, i) => ({ val: v, vec: vecs[i] })).sort((a, b) => b.val - a.val);
    const rotM = new THREE.Matrix4().makeBasis(
      new THREE.Vector3(...pairs[0].vec),
      new THREE.Vector3(...pairs[1].vec),
      new THREE.Vector3(...pairs[0].vec).cross(new THREE.Vector3(...pairs[1].vec))
    );
    const s = pairs.map(p => Math.sqrt(Math.max(p.val * CHI95, 0.1)));
    return { mean: stats.mean, scale: s, matrix: rotM };
  }, [subset]);

  if (!mean) return null;
  return (
    <mesh position={mean} scale={scale} quaternion={new THREE.Quaternion().setFromRotationMatrix(matrix)}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.15} 
        emissive={color} 
        emissiveIntensity={0.3} 
      />
    </mesh>
  );
}

/* =========================
   MAIN APP
========================= */
export default function BarPassPredictor() {
  const [data, setData] = useState(null);
  const [inputs, setInputs] = useState({ gong: "30", hyung: "20", min: "15" });
  const [result, setResult] = useState({ prob: null, advice: "", customPoint: null });

  useEffect(() => {
    fetch("/model_3d_export.json")
      .then(r => r.json())
      .then(json => setData(json.data))
      .catch(e => console.error(e));
  }, []);

  const handleAnalyze = () => {
    if (!data) return;
    const current = [Number(inputs.gong), Number(inputs.hyung), Number(inputs.min)];
    const { w, b } = solveModel(data);
    const logit = vecDot(w, current) + b;
    const prob = 1 / (1 + Math.exp(-logit));

    const TARGET_LOGIT = Math.log(0.9 / 0.1); 
    let advice = "";
    
    if (prob >= 0.9) {
      advice = "합격 안정권입니다! 현재 균형을 잘 유지하세요.";
    } else {
      const needed = TARGET_LOGIT - logit;
      const potential = current.map((v, i) => Math.max(0, MAX_SCORES[i] - v));
      const effortWeights = w.map((weight, i) => weight * potential[i]);
      const totalEffort = effortWeights.reduce((a, b) => a + b, 0);

      if (totalEffort <= 0) {
        advice = "객관식 점수가 이미 최상위권입니다. 주관식 시험에 집중하세요.";
      } else {
        const diffs = effortWeights.map((ew, i) => (needed * (ew / totalEffort)) / w[i]);
        advice = `[공법: +${diffs[0].toFixed(1)}, 형법: +${diffs[1].toFixed(1)}, 민법: +${diffs[2].toFixed(1)}] 개 추가 득점 시 90% 안정권 진입!`;
      }
    }
    setResult({ prob, advice, customPoint: current });
  };

  if (!data) return <div style={loadingStyle}>분석 모델 준비 중...</div>;

  return (
    <div style={rootContainer}>
      <div style={appWrapper}>
        <header style={headerPanel}>
          <div style={titleArea}>
            <h2 style={titleText}>변시 합격 확률 <span style={{color:'#00FF7F'}}>DALS</span></h2>
            {result.prob !== null && (
              <div style={{...probBadge, borderColor: result.prob > 0.8 ? '#00FF7F' : '#FF1A1A', color: result.prob > 0.8 ? '#00FF7F' : '#FF1A1A'}}>
                {(result.prob * 100).toFixed(1)}%
              </div>
            )}
          </div>
          
          <div style={inputGrid}>
            {[["공법", "gong"], ["형법", "hyung"], ["민법", "min"]].map(([label, key]) => (
              <div key={key} style={inputGroup}>
                <label style={labelStyle}>{label}</label>
                <input type="number" value={inputs[key]} onChange={e => setInputs({...inputs, [key]: e.target.value})} style={inputStyle} />
              </div>
            ))}
            <button onClick={handleAnalyze} style={analyzeBtn}>분석</button>
          </div>

          {result.advice && (
            <div style={adviceBox}>
              <div style={{fontWeight:'bold', color:'#4DA3FF', marginBottom:'2px', fontSize:'0.75rem'}}>🎯 추천 전략</div>
              <div style={{fontSize:'0.8rem', color:'#fff', fontWeight:'500'}}>{result.advice}</div>
            </div>
          )}
        </header>

        <main style={{flex: 1, position:'relative'}}>
          {/* 상단 슬림 범례 (모바일 최적화) */}
          <div style={topLegendBar}>
            <div style={legendItem}><div style={dot('#00FF7F')}/> 합격군</div>
            <div style={legendItem}><div style={dot('#007FFF')}/> 불합격군</div>
            <div style={legendItem}><div style={{...dot('#FF0000'), boxShadow:'0 0 12px #FF0000'}}/> 내 위치</div>
          </div>

          <Canvas dpr={[1, 2]} camera={{ position: [110, 90, 130], fov: 35 }}>
            <Suspense fallback={null}>
              <color attach="background" args={["#000000"]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[100, 100, 100]} intensity={2} />
              
              <gridHelper args={[120, 12, "#222", "#222"]} position={[25, 0, 35]} />
              
              {data.map((d, i) => (
                <mesh key={i} position={[d.XGC, d.XHC, d.XMC]}>
                  <sphereGeometry args={[0.3, 8, 8]} />
                  <meshStandardMaterial 
                    color={d.pass === 1 ? "#00FF7F" : "#007FFF"} 
                    emissive={d.pass === 1 ? "#00FF7F" : "#007FFF"}
                    emissiveIntensity={0.2}
                  />
                </mesh>
              ))}

              <Ellipsoid data={data} isPass={true} color="#00FF7F" />
              <Ellipsoid data={data} isPass={false} color="#007FFF" />

              {/* 내 위치: 순수 Red 강조 */}
              {result.customPoint && (
                <group position={result.customPoint}>
                  <mesh>
                    <sphereGeometry args={[1.8, 32, 32]} />
                    {/* emissiveIntensity를 대폭 높여 번쩍이는 빨간색 구현 */}
                    <meshStandardMaterial 
                      color="#FF0000" 
                      emissive="#FF0000" 
                      emissiveIntensity={15} 
                      toneMapped={false} 
                    />
                  </mesh>
                  <pointLight color="#FF0000" intensity={20} distance={60} />
                </group>
              )}
              <OrbitControls target={[25, 15, 35]} />
            </Suspense>
          </Canvas>
        </main>
      </div>
    </div>
  );
}

/* =========================
   STYLING
========================= */
const rootContainer = { width: "100vw", height: "100vh", background: "#000", display: "flex", justifyContent: "center", overflow: "hidden" };
const appWrapper = { width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", background: "#000" };
const headerPanel = { padding: "15px", background: "rgba(20,20,20,0.98)", borderBottom: "1px solid #333", zIndex: 10 };
const titleArea = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" };
const titleText = { margin: 0, fontSize: "1.1rem", color: "#fff", fontWeight: "900" };
const probBadge = { padding: "4px 12px", background: "#000", borderRadius: "15px", border: "2px solid", fontWeight: "900", fontSize: "0.9rem" };
const inputGrid = { display: "flex", gap: "8px", alignItems: "flex-end" };
const inputGroup = { flex: 1, display: "flex", flexDirection: "column", gap: "3px" };
const labelStyle = { fontSize: "0.65rem", color: "#888", fontWeight: "bold", textAlign: "center" };
const inputStyle = { width: "100%", padding: "10px 0", background: "#111", border: "1px solid #444", color: "#fff", textAlign: "center", borderRadius: "6px", fontSize: "0.9rem", outline: "none" };
const analyzeBtn = { padding: "10px 15px", background: "#00FF7F", color: "#000", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "0.9rem" };
const adviceBox = { marginTop: "10px", padding: "10px", background: "#111", borderRadius: "8px", border: "1px solid #333" };

// 상단 슬림 범례 스타일
const topLegendBar = { 
  position: "absolute", 
  top: "15px", 
  left: "50%", 
  transform: "translateX(-50%)", 
  display: "flex", 
  gap: "15px", 
  background: "rgba(0,0,0,0.7)", 
  padding: "6px 15px", 
  borderRadius: "20px", 
  border: "1px solid #444", 
  zIndex: 5,
  whiteSpace: "nowrap"
};
const legendItem = { display: 'flex', alignItems: 'center', gap: '6px', color: '#eee', fontSize: '0.7rem', fontWeight: 'bold' };
const dot = (color) => ({ width: "8px", height: "8px", borderRadius: "50%", background: color });

const loadingStyle = { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#00FF7F", background: "#000", fontWeight: "bold" };