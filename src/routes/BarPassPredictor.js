import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   STATISTICS & LOGIC (최종 강화 버전)
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
  const det = a * A + b * D + c * G;
  const safeDet = Math.abs(det) < 1e-6 ? 1e-6 : det;
  return [[A/safeDet, B/safeDet, C/safeDet], [D/safeDet, E/safeDet, F/safeDet], [G/safeDet, H/safeDet, I/safeDet]];
}

function computeStats(points) {
  const n = points.length;
  if (n < 2) return { mean: [0,0,0], cov: [[1,0,0],[0,1,0],[0,0,1]] };
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
    cov[i][i] += 0.5; 
  }
  return { mean, cov };
}

function solveRealisticModel(data, current) {
  const p0 = data.filter(d => d.pass === 0);
  const p1 = data.filter(d => d.pass === 1);
  const s0 = computeStats(p0);
  const s1 = computeStats(p1);
  const pooledCov = s0.cov.map((row, i) => row.map((val, j) => (val + s1.cov[i][j]) / 2));
  const invCov = invert3x3(pooledCov);
  let w = mul(invCov, vecSub(s1.mean, s0.mean)).map(v => Math.max(v, 0.08)); 
  const midPoint = s0.mean.map((v, i) => (v + s1.mean[i]) / 2);
  const b = -vecDot(w, midPoint);
  const logitScale = 0.5; 
  const logit = (vecDot(w, current) + b) * logitScale;
  const prob = 1 / (1 + Math.exp(-logit));
  return { w, b, prob, logitScale };
}

/* =========================
   3D SHAPES
========================= */
const CHI95 = 7.815;
function eigen3(A) {
  let M = A.map((r) => [...r]);
  const vecs = [], vals = [];
  for (let i = 0; i < 3; i++) {
    let v = [Math.random(), Math.random(), Math.random()];
    for (let j = 0; j < 25; j++) {
      const Av = mul(M, v);
      const n = Math.hypot(...Av) || 1;
      v = Av.map(x => x / n);
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
  const shape = useMemo(() => {
    if (subset.length < 5) return null;
    const stats = computeStats(subset);
    const { vecs, vals } = eigen3(stats.cov);
    const pairs = vals.map((v, i) => ({ val: v, vec: vecs[i] })).sort((a, b) => b.val - a.val);
    const rotM = new THREE.Matrix4().makeBasis(
      new THREE.Vector3(...pairs[0].vec),
      new THREE.Vector3(...pairs[1].vec),
      new THREE.Vector3(...pairs[0].vec).cross(new THREE.Vector3(...pairs[1].vec))
    );
    const s = pairs.map(p => Math.sqrt(Math.max(p.val * CHI95, 0.1)));
    return { mean: stats.mean, scale: s, quaternion: new THREE.Quaternion().setFromRotationMatrix(rotM) };
  }, [subset]);

  if (!shape) return null;
  return (
    <mesh position={shape.mean} scale={shape.scale} quaternion={shape.quaternion}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.12} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

/* =========================
   MAIN APP
========================= */
export default function BarPassPredictor() {
  const [data, setData] = useState(null);
  const [inputs, setInputs] = useState({ gong: "30", hyung: "31", min: "38" });
  const [result, setResult] = useState({ prob: null, advice: "", customPoint: null });

  useEffect(() => {
    fetch("/model_3d_export.json")
      .then(r => r.json())
      .then(json => setData(json.data))
      .catch(e => console.error("Data Error:", e));
  }, []);

  const handleAnalyze = () => {
    if (!data) return;
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const vGong = clamp(Number(inputs.gong), 0, 40);
    const vHyung = clamp(Number(inputs.hyung), 0, 40);
    const vMin = clamp(Number(inputs.min), 0, 70);
    setInputs({ gong: vGong.toString(), hyung: vHyung.toString(), min: vMin.toString() });

    const current = [vGong, vHyung, vMin];
    const { w, b, prob, logitScale } = solveRealisticModel(data, current);

    const TARGET_PROB = 0.90; 
    const TARGET_LOGIT = Math.log(TARGET_PROB / (1 - TARGET_PROB)) / logitScale; 
    let advice = "";
    
    if (prob >= TARGET_PROB) {
      advice = "축하합니다! 합격 확률 90% 이상의 최상위권입니다. 실수를 줄이는 방향으로 마무리하세요.";
    } else {
      const currentLogit = vecDot(w, current) + b;
      const needed = TARGET_LOGIT - currentLogit;
      const effortWeights = w.map((weight, i) => {
          const lackRatio = (MAX_SCORES[i] - current[i]) / MAX_SCORES[i];
          return weight * (0.5 + lackRatio); 
      });
      const totalEffort = effortWeights.reduce((a, b) => a + b, 0);
      const rawDiffs = effortWeights.map((ew, i) => (needed * (ew / totalEffort)) / w[i]);
      const formatted = rawDiffs.map((d, i) => {
        const maxPossible = MAX_SCORES[i] - current[i];
        let finalD = Math.min(d, maxPossible);
        if (prob < TARGET_PROB && finalD < 0.5 && maxPossible > 1) { finalD = 1.0; }
        return finalD >= 0.5 ? `+${finalD.toFixed(1)}` : "유지";
      });
      advice = `[공법: ${formatted[0]}, 형사: ${formatted[1]}, 민사: ${formatted[2]}] 보완 시 합격 확률 90% 안정권 진입이 가능합니다.`;
    }
    setResult({ prob, advice, customPoint: current });
  };

  if (!data) return <div style={loadingStyle}>모델 데이터를 불러오는 중...</div>;

  return (
    <div style={rootContainer}>
      <div style={appWrapper}>
        <header style={headerPanel}>
          <div style={titleArea}>
            <h2 style={titleText}>변시 합격 예측 <span style={{color:'#00FF7F', fontSize:'0.7em'}}>DALS</span></h2>
            {result.prob !== null && (
              <div style={{...probBadge, 
                borderColor: result.prob > 0.8 ? '#00FF7F' : '#FF1A1A', 
                color: result.prob > 0.8 ? '#00FF7F' : '#FF1A1A'
              }}>
                {(result.prob * 100).toFixed(1)}%
              </div>
            )}
          </div>
          
          <div style={inputGrid}>
            {[["공법 개수(40)", "gong"], ["형사법 개수(40)", "hyung"], ["민사법 개수(70)", "min"]].map(([label, key]) => (
              <div key={key} style={inputGroup}>
                <label style={labelStyle}>{label}</label>
                <input type="number" value={inputs[key]} onChange={e => setInputs({...inputs, [key]: e.target.value})} style={inputStyle} />
              </div>
            ))}
            <button onClick={handleAnalyze} style={analyzeBtn}>분석</button>
          </div>

          {result.advice && (
            <div style={adviceBox}>
              <div style={{fontWeight:'900', color:'#4DA3FF', marginBottom:'4px', fontSize:'0.75rem'}}>🚀 90% 달성 전략</div>
              <div style={{fontSize:'0.85rem', color:'#eee', lineHeight:'1.4'}}>{result.advice}</div>
            </div>
          )}
        </header>

        <main style={{flex: 1, position:'relative'}}>
          {/* 모바일 최적화 한 줄 범례 */}
          <div style={topLegendBar}>
            <div style={legendItem}><div style={dot('#00FF7F')}/> 합격군</div>
            <div style={legendItem}><div style={dot('#007FFF')}/> 불합격군</div>
            <div style={legendItem}><div style={{...dot('#FF0000'), boxShadow:'0 0 10px #FF0000'}}/> 내 위치</div>
          </div>

          <Canvas dpr={[1, 2]} camera={{ position: [110, 90, 130], fov: 32 }}>
            <Suspense fallback={null}>
              <color attach="background" args={["#000"]} />
              <ambientLight intensity={0.6} />
              <pointLight position={[100, 100, 100]} intensity={2.5} />
              <gridHelper args={[120, 12, "#333", "#222"]} position={[25, 0, 35]} />
              
              {data.map((d, i) => (
                <mesh key={i} position={[d.XGC, d.XHC, d.XMC]}>
                  <sphereGeometry args={[0.3, 8, 8]} />
                  <meshStandardMaterial 
                    color={d.pass === 1 ? "#00FF7F" : "#007FFF"} 
                    emissive={d.pass === 1 ? "#00FF7F" : "#007FFF"}
                    emissiveIntensity={0.3}
                    transparent opacity={0.6}
                  />
                </mesh>
              ))}

              <Ellipsoid data={data} isPass={true} color="#00FF7F" />
              <Ellipsoid data={data} isPass={false} color="#007FFF" />

              {result.customPoint && (
                <group position={result.customPoint}>
                  <mesh>
                    <sphereGeometry args={[1.8, 32, 32]} />
                    <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={15} toneMapped={false} />
                  </mesh>
                  <pointLight color="#FF0000" intensity={20} distance={60} />
                </group>
              )}
              <OrbitControls target={[25, 15, 35]} makeDefault />
            </Suspense>
          </Canvas>
        </main>
      </div>
    </div>
  );
}

/* =========================
   STYLING (모바일 최적화 수정)
========================= */
const rootContainer = { width: "100vw", height: "100vh", background: "#000", display: "flex", justifyContent: "center", overflow: "hidden" };
const appWrapper = { width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", background: "#000" };
const headerPanel = { padding: "18px", background: "rgba(15,15,15,0.95)", borderBottom: "1px solid #333", zIndex: 10 };
const titleArea = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" };
const titleText = { margin: 0, fontSize: "1.2rem", color: "#fff", fontWeight: "900" };
const probBadge = { padding: "5px 15px", background: "#000", borderRadius: "20px", border: "2px solid", fontWeight: "900", fontSize: "0.95rem" };
const inputGrid = { display: "flex", gap: "8px", alignItems: "flex-end" };
const inputGroup = { flex: 1, display: "flex", flexDirection: "column", gap: "4px" };
const labelStyle = { fontSize: "0.65rem", color: "#aaa", fontWeight: "700", textAlign: "center" };
const inputStyle = { width: "100%", padding: "12px 0", background: "#111", border: "1px solid #444", color: "#fff", textAlign: "center", borderRadius: "8px", fontSize: "1rem", outline: "none" };
const analyzeBtn = { padding: "12px 15px", background: "#00FF7F", color: "#000", border: "none", borderRadius: "8px", fontWeight: "900", cursor: "pointer" };
const adviceBox = { marginTop: "12px", padding: "12px", background: "#0a0a0a", borderRadius: "10px", border: "1px solid #333" };

// 범례 스타일: 모바일에서 한 줄로 나오도록 수정
const topLegendBar = { 
  position: "absolute", 
  top: "15px", 
  left: "50%", 
  transform: "translateX(-50%)", 
  display: "flex", 
  flexWrap: "nowrap", // 줄바꿈 금지
  gap: "10px", // 간격 축소
  background: "rgba(0,0,0,0.85)", 
  padding: "6px 14px", 
  borderRadius: "30px", 
  border: "1px solid #444", 
  zIndex: 5,
  width: "auto",
  maxWidth: "95vw", // 화면 밖으로 나가지 않게
  justifyContent: "center"
};

const legendItem = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: '5px', // 간격 축소
  color: '#fff', 
  fontSize: '0.65rem', // 모바일 가독성을 위해 살짝 조절
  fontWeight: 'bold',
  whiteSpace: 'nowrap' // 텍스트 줄바꿈 방지
};

const dot = (color) => ({ width: "8px", height: "8px", borderRadius: "50%", background: color });
const loadingStyle = { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#00FF7F", background: "#000", fontWeight: "bold" };