import React, { useEffect, useMemo, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   STATISTICS & MATH LOGIC
========================= */
function mul(A, v) {
  return [
    A[0][0] * v[0] + A[0][1] * v[1] + A[0][2] * v[2],
    A[1][0] * v[0] + A[1][1] * v[1] + A[1][2] * v[2],
    A[2][0] * v[0] + A[2][1] * v[1] + A[2][2] * v[2],
  ];
}
function norm(v) {
  const n = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / n, v[1] / n, v[2] / n];
}
function dominantEigen(A) {
  let v = [1, 1, 1];
  for (let i = 0; i < 25; i++) v = norm(mul(A, v));
  const Av = mul(A, v);
  const lambda = v[0] * Av[0] + v[1] * Av[1] + v[2] * Av[2];
  return { v, lambda };
}
function eigen3(A) {
  let M = A.map((r) => [...r]);
  const vecs = [], vals = [];
  for (let i = 0; i < 3; i++) {
    const { v, lambda } = dominantEigen(M);
    vecs.push(v); vals.push(lambda);
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 3; c++) M[r][c] -= lambda * v[r] * v[c];
  }
  return { vecs, vals };
}
function computeMean(points) {
  const n = points.length;
  if (n === 0) return [0, 0, 0];
  return [
    points.reduce((s, p) => s + p.XGC, 0) / n,
    points.reduce((s, p) => s + p.XHC, 0) / n,
    points.reduce((s, p) => s + p.XMC, 0) / n,
  ];
}
function computeCov(points, mean) {
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const n = points.length;
  if (n === 0) return cov;
  for (let p of points) {
    const x = [p.XGC - mean[0], p.XHC - mean[1], p.XMC - mean[2]];
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) cov[i][j] += x[i] * x[j];
  }
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) cov[i][j] /= n;
  return cov;
}
function invert3x3(m) {
  const a = m[0][0], b = m[0][1], c = m[0][2], d = m[1][0], e = m[1][1], f = m[1][2], g = m[2][0], h = m[2][1], i = m[2][2];
  const A = e * i - f * h, B = c * h - b * i, C = b * f - c * e;
  const D = f * g - d * i, E = a * i - c * g, F = c * d - a * f;
  const G = d * h - e * g, H = b * g - a * h, I = a * e - b * d;
  const det = a * A + b * D + c * G || 1;
  return [[A / det, B / det, C / det], [D / det, E / det, F / det], [G / det, H / det, I / det]];
}
function mahalanobisMonotonic(x, mean, cov, direction) {
  const diff = x.map((val, i) => {
    if (direction === 1 && val > mean[i]) return 0;
    if (direction === -1 && val < mean[i]) return 0;
    return val - mean[i];
  });
  const inv = invert3x3(cov);
  const left = [
    diff[0] * inv[0][0] + diff[1] * inv[1][0] + diff[2] * inv[2][0],
    diff[0] * inv[0][1] + diff[1] * inv[1][1] + diff[2] * inv[2][1],
    diff[0] * inv[0][2] + diff[1] * inv[1][2] + diff[2] * inv[2][2],
  ];
  return diff[0] * left[0] + diff[1] * left[1] + diff[2] * left[2];
}
function predictProb(x, p0, p1) {
  const m0 = computeMean(p0), m1 = computeMean(p1);
  const c0 = computeCov(p0, m0), c1 = computeCov(p1, m1);
  const d0 = mahalanobisMonotonic(x, m0, c0, -1);
  const d1 = mahalanobisMonotonic(x, m1, c1, 1);
  const s0 = Math.exp(-0.5 * d0), s1 = Math.exp(-0.5 * d1);
  return s1 / (s0 + s1 + 1e-9);
}

/* =========================
   3D SUB-COMPONENTS
========================= */
const CHI95 = 7.815;

function Ellipsoid({ points, color }) {
  const { mean, scale, matrix } = useMemo(() => {
    if (!points || points.length < 3) return null;
    const m = computeMean(points);
    const cov = computeCov(points, m);
    const { vecs, vals } = eigen3(cov);
    const pairs = vals.map((v, i) => ({ val: v, vec: vecs[i] })).sort((a, b) => b.val - a.val);
    const x = new THREE.Vector3(...pairs[0].vec).normalize();
    let y = new THREE.Vector3(...pairs[1].vec).normalize();
    const z = new THREE.Vector3().crossVectors(x, y).normalize();
    y = new THREE.Vector3().crossVectors(z, x).normalize();
    const rotM = new THREE.Matrix3().set(x.x, y.x, z.x, x.y, y.y, z.y, x.z, y.z, z.z);
    const s = pairs.map(p => Math.sqrt(Math.max(p.val * CHI95, 1e-6)));
    return { mean: m, scale: s, matrix: rotM };
  }, [points]);

  if (!mean) return null;
  const quat = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().setFromMatrix3(matrix));

  return (
    <mesh position={mean} scale={scale} quaternion={quat}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.4} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

function SceneContent({ data, customPoint, center }) {
  const p0 = useMemo(() => data.filter(d => d.pass === 0), [data]);
  const p1 = useMemo(() => data.filter(d => d.pass === 1), [data]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[100, 100, 100]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <gridHelper args={[100, 10, "#333", "#222"]} position={[20, 0, 35]} />
      <axesHelper args={[80]} />

      {data.map((d, i) => (
        <mesh key={i} position={[d.XGC, d.XHC, d.XMC]}>
          <sphereGeometry args={[0.35, 8, 8]} />
          <meshStandardMaterial color={d.pass === 1 ? "#00FF7F" : "#00A2FF"} emissive={d.pass === 1 ? "#00FF7F" : "#00A2FF"} emissiveIntensity={0.6} />
        </mesh>
      ))}

      <Ellipsoid points={p0} color="#00A2FF" />
      <Ellipsoid points={p1} color="#00FF7F" />

      {customPoint && (
        <group position={customPoint}>
          <mesh>
            <sphereGeometry args={[2.2, 32, 32]} />
            <meshStandardMaterial color="#FF3030" emissive="#FF3030" emissiveIntensity={4} />
          </mesh>
          <pointLight color="#FF3030" intensity={5} distance={50} />
        </group>
      )}

      <OrbitControls target={center} enableDamping />
    </>
  );
}

/* =========================
   MAIN APP COMPONENT
========================= */
export default function BarPassPredictor() {
  const [data, setData] = useState(null);
  const [inputs, setInputs] = useState({ gong: "0", hyung: "0", min: "0" });
  const [result, setResult] = useState({ prob: null, customPoint: null, advice: "" });

  useEffect(() => {
    fetch("/model_3d_export.json")
      .then(r => r.json())
      .then(json => setData(json.data))
      .catch(e => console.error("Data error:", e));
  }, []);

  const handleAnalyze = () => {
    if (!data) return;
    const g = Math.min(40, Math.max(0, Number(inputs.gong || 0)));
    const h = Math.min(40, Math.max(0, Number(inputs.hyung || 0)));
    const m = Math.min(70, Math.max(0, Number(inputs.min || 0)));
    
    setInputs({ gong: g.toString(), hyung: h.toString(), min: m.toString() });
    
    const x = [g, h, m];
    const p0 = data.filter(d => d.pass === 0);
    const p1 = data.filter(d => d.pass === 1);
    
    const prob = predictProb(x, p0, p1);

    let advice = "";
    if (prob >= 0.9) advice = "이미 합격 안정권(90% 이상)입니다. 유지에 집중하세요!";
    else {
      const m1 = computeMean(p1);
      const diff = [Math.max(0, m1[0] - g), Math.max(0, m1[1] - h), Math.max(0, m1[2] - m)];
      advice = `안정권을 위해 [공법: +${diff[0].toFixed(1)}, 형법: +${diff[1].toFixed(1)}, 민법: +${diff[2].toFixed(1)}] 점이 더 필요합니다.`;
    }

    setResult({ prob, customPoint: x, advice });
  };

  if (!data) return <div style={loadingStyle}>데이터 분석 엔진 가동 중...</div>;

  return (
    <div style={rootContainer}>
      <div style={appWrapper}>
        
        {/* 1. TOP INPUT PANEL */}
        <header style={headerPanel}>
          <div style={titleArea}>
            <h1 style={titleText}>변시 합격 확률 예측</h1>
            {result.prob !== null && (
              <div style={probDisplay}>
                확률: <span style={{color: result.prob > 0.8 ? "#00FF7F" : "#4DA3FF"}}>{(result.prob * 100).toFixed(1)}%</span>
              </div>
            )}
          </div>

          <div style={inputGrid}>
            <div style={inputGroup}>
              <label style={labelStyle}>공법 (max 40)</label>
              <input type="number" value={inputs.gong} onChange={e => setInputs({...inputs, gong: e.target.value})} style={inputStyle} />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>형법 (max 40)</label>
              <input type="number" value={inputs.hyung} onChange={e => setInputs({...inputs, hyung: e.target.value})} style={inputStyle} />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>민법 (max 70)</label>
              <input type="number" value={inputs.min} onChange={e => setInputs({...inputs, min: e.target.value})} style={inputStyle} />
            </div>
            <button onClick={handleAnalyze} style={analyzeBtn}>분석</button>
          </div>

          {result.advice && (
            <div style={adviceBox}>
              <span style={{color: "#4DA3FF", fontWeight: "bold"}}>📊 학습 전략 조언:</span><br/>
              {result.advice}
            </div>
          )}
        </header>

        {/* 2. CENTER GRAPH AREA */}
        <main style={graphContainer}>
          <Canvas dpr={[1, 2]}>
            <Suspense fallback={null}>
              <color attach="background" args={["#0a0a0a"]} />
              <PerspectiveCamera makeDefault position={[120, 100, 140]} fov={35} />
              <SceneContent data={data} customPoint={result.customPoint} center={[20, 20, 35]} />
            </Suspense>
          </Canvas>
          
          <div style={legendOverlay}>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}><div style={dot('#00FF7F')}/> 합격군</div>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}><div style={dot('#00A2FF')}/> 불합격군</div>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}><div style={dot('#FF3030')}/> 나의 위치</div>
          </div>
        </main>

        <footer style={bottomSafe} />
      </div>
    </div>
  );
}

/* =========================
   STYLES (Desktop & Mobile Optimized)
========================= */
const rootContainer = {
  width: "100vw", height: "100vh", background: "#000",
  display: "flex", justifyContent: "center", overflow: "hidden"
};

const appWrapper = {
  width: "100%", maxWidth: "800px", // 데스크탑에서 너무 삐져나가지 않게 제한
  height: "100%", display: "flex", flexDirection: "column",
  background: "#0a0a0a", position: "relative", boxShadow: "0 0 50px rgba(0,0,0,1)"
};

const headerPanel = {
  background: "rgba(20, 20, 20, 0.98)", padding: "20px",
  borderBottom: "1px solid #333", zIndex: 10
};

const titleArea = {
  display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"
};

const titleText = { fontSize: "1.2rem", fontWeight: "900", color: "#eee", margin: 0 };

const probDisplay = {
  fontSize: "1rem", fontWeight: "bold", background: "#1a1a1a",
  padding: "5px 15px", borderRadius: "20px", border: "1px solid #444"
};

const inputGrid = { display: "flex", gap: "10px", alignItems: "flex-end" };

const inputGroup = { flex: 1, display: "flex", flexDirection: "column", gap: "5px" };

const labelStyle = { fontSize: "0.7rem", color: "#888", fontWeight: "600", textAlign: "center" };

const inputStyle = {
  width: "100%", padding: "12px 0", borderRadius: "10px", border: "1px solid #444",
  background: "#111", color: "white", fontSize: "1rem", textAlign: "center", outline: "none"
};

const analyzeBtn = {
  padding: "12px 20px", borderRadius: "10px", border: "none",
  background: "#4DA3FF", color: "white", fontWeight: "bold", cursor: "pointer", height: "46px"
};

const adviceBox = {
  marginTop: "15px", padding: "12px", borderRadius: "10px",
  background: "#151515", border: "1px solid #222", fontSize: "0.85rem", color: "#ccc", lineHeight: "1.5"
};

const graphContainer = { flex: 1, position: "relative" };

const legendOverlay = {
  position: "absolute", bottom: "20px", right: "20px", fontSize: "0.75rem",
  background: "rgba(0,0,0,0.7)", padding: "10px", borderRadius: "10px",
  display: "flex", flexDirection: "column", gap: "5px", pointerEvents: "none", border: "1px solid #333"
};

const dot = (color) => ({ width: "8px", height: "8px", borderRadius: "50%", background: color });

const bottomSafe = { height: "env(safe-area-inset-bottom, 20px)", background: "#0a0a0a" };

const loadingStyle = {
  height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
  background: "#0a0a0a", color: "#fff"
};