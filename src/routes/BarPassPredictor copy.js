import React, { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/* =========================
   LINEAR ALGEBRA & STATS (Monotonic Logic)
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

function getAdvice(currentX, p0, p1) {
  const prob = predictProb(currentX, p0, p1);
  if (prob >= 0.9) return "이미 합격 안정권(90% 이상)입니다. 유지에 집중하세요!";
  const m1 = computeMean(p1);
  let bestX = [...currentX];
  for (let i = 1; i <= 100; i++) {
    const ratio = i / 40;
    const testX = [currentX[0] + (m1[0] - currentX[0]) * ratio, currentX[1] + (m1[1] - currentX[1]) * ratio, currentX[2] + (m1[2] - currentX[2]) * ratio];
    const clampedX = [Math.min(40, testX[0]), Math.min(40, testX[1]), Math.min(70, testX[2])];
    if (predictProb(clampedX, p0, p1) >= 0.9) { bestX = clampedX; break; }
  }
  const diff = [Math.max(0, bestX[0] - currentX[0]), Math.max(0, bestX[1] - currentX[1]), Math.max(0, bestX[2] - currentX[2])];
  return `안정권을 위해 [공법: +${diff[0].toFixed(1)}, 형법: +${diff[1].toFixed(1)}, 민법: +${diff[2].toFixed(1)}] 점이 더 필요합니다.`;
}

/* =========================
   3D COMPONENTS
========================= */

function PointCloud({ data }) {
  return (
    <>
      {data.map((d, i) => (
        <mesh key={i} position={[d.XGC, d.XHC, d.XMC]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshStandardMaterial 
            color={d.pass === 1 ? "#00FF7F" : "#1E90FF"} 
            emissive={d.pass === 1 ? "#00FF7F" : "#1E90FF"}
            emissiveIntensity={0.6}
            transparent 
            opacity={1.0} 
          />
        </mesh>
      ))}
    </>
  );
}

function Axes({ c, size = 70 }) {
  const line = (from, to, color) => {
    const geom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...from), new THREE.Vector3(...to)]);
    return <lineSegments geometry={geom}><lineBasicMaterial color={color} transparent opacity={0.4} /></lineSegments>;
  };
  return (
    <group>
      {line([0, 0, 0], [size, 0, 0], "#ff4444")} {/* X: 공법 */}
      {line([0, 0, 0], [0, size, 0], "#44ff44")} {/* Y: 형법 */}
      {line([0, 0, 0], [0, 0, size], "#4444ff")} {/* Z: 민법 */}
    </group>
  );
}

const CHI95 = 7.815;
function Ellipsoid({ points, color }) {
  const safe = points || [];
  const { mean, scale, matrix } = useMemo(() => {
    if (safe.length < 3) return { mean:[0,0,0], scale:[1,1,1], matrix: new THREE.Matrix3() };
    const mean = computeMean(safe);
    const cov = computeCov(safe, mean);
    const { vecs, vals } = eigen3(cov);
    const pairs = vals.map((v,i)=>({val:v, vec:vecs[i]})).sort((a,b)=>b.val-a.val);
    const x = new THREE.Vector3(...pairs[0].vec).normalize();
    let y = new THREE.Vector3(...pairs[1].vec).normalize();
    const z = new THREE.Vector3().crossVectors(x,y).normalize();
    y = new THREE.Vector3().crossVectors(z,x).normalize();
    const m = new THREE.Matrix3();
    m.set(x.x,y.x,z.x, x.y,y.y,z.y, x.z,y.z,z.z);
    const scale = pairs.map(p => Math.sqrt(Math.max(p.val * CHI95, 1e-6)));
    return { mean, scale, matrix: m };
  }, [safe]);

  const quat = useMemo(() => new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().setFromMatrix3(matrix)), [matrix]);
  if (safe.length < 3) return null;

  return (
    <mesh position={mean} scale={scale} quaternion={quat}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.4} 
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

/* =========================
   MAIN APP (Mobile First & Visual Boost)
========================= */

export default function BarPassPredictor() {
  const [data, setData] = useState(null);
  const [inputs, setInputs] = useState({ gong: "0", hyung: "0", min: "0" });
  const [customPoint, setCustomPoint] = useState(null);
  const [prob, setProb] = useState(null);
  const [advice, setAdvice] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    fetch("/model_3d_export.json")
      .then(r => r.json())
      .then(setData);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const center = useMemo(() => {
    if (!data?.data?.length) return [20, 20, 35]; // 대략적인 중간값
    const a = data.data;
    return [
      a.reduce((s, d) => s + d.XGC, 0) / a.length,
      a.reduce((s, d) => s + d.XHC, 0) / a.length,
      a.reduce((s, d) => s + d.XMC, 0) / a.length,
    ];
  }, [data]);

  if (!data) return <div style={{background:"#050505", color:"white", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>데이터 로딩 중...</div>;

  const p0 = data.data.filter(d => d.pass === 0);
  const p1 = data.data.filter(d => d.pass === 1);

  const analyze = () => {
    // 0~40, 0~40, 0~70 범위 강제 조정
    const x = [
      Math.min(40, Math.max(0, Number(inputs.gong || 0))),
      Math.min(40, Math.max(0, Number(inputs.hyung || 0))),
      Math.min(70, Math.max(0, Number(inputs.min || 0)))
    ];
    setInputs({
      gong: x[0].toString(),
      hyung: x[1].toString(),
      min: x[2].toString()
    });
    setCustomPoint(x);
    setProb(predictProb(x, p0, p1));
    setAdvice(getAdvice(x, p0, p1));
  };

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    background: "#050505",
    color: "#fff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: "hidden"
  };

  const sidebarStyle = {
    width: isMobile ? "100%" : "360px",
    height: isMobile ? "auto" : "100%",
    maxHeight: isMobile ? "50%" : "100%",
    background: "rgba(15, 15, 15, 0.98)",
    borderRight: isMobile ? "none" : "1px solid #333",
    borderBottom: isMobile ? "1px solid #333" : "none",
    display: "flex",
    flexDirection: "column",
    padding: isMobile ? "20px" : "40px",
    zIndex: 100,
    overflowY: "auto",
    boxShadow: "10px 0 30px rgba(0,0,0,0.5)"
  };

  return (
    <div style={containerStyle}>
      
      {/* UI PANEL */}
      <aside style={sidebarStyle}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "5px", color: "#4DA3FF" }}>변호사 시험 합격 분석</h2>
        <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "25px" }}>객관식 점수 기반 시뮬레이션</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <InputGroup label="공법 (max 40)" value={inputs.gong} onChange={v => setInputs({...inputs, gong: v})} />
          <InputGroup label="형법 (max 40)" value={inputs.hyung} onChange={v => setInputs({...inputs, hyung: v})} />
          <InputGroup label="민법 (max 70)" value={inputs.min} onChange={v => setInputs({...inputs, min: v})} />

          <button onClick={analyze} style={btnStyle}>분석 실행</button>
        </div>

        {prob !== null && (
          <div style={{ marginTop: "30px", borderTop: "1px solid #333", paddingTop: "25px" }}>
            <div style={{ fontSize: "0.85rem", color: "#aaa", marginBottom: "5px" }}>예상 합격 확률</div>
            <div style={{ fontSize: "2.8rem", fontWeight: "900", color: prob > 0.8 ? "#00FF7F" : "#4DA3FF", textShadow: `0 0 20px ${prob > 0.8 ? "#00FF7F44" : "#4DA3FF44"}` }}>
              {(prob * 100).toFixed(1)}<span style={{fontSize: "1.2rem"}}>%</span>
            </div>
            
            <div style={{ marginTop: "20px", padding: "18px", background: "#111", borderRadius: "14px", border: "1px solid #222" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#4DA3FF", marginBottom: "8px" }}>📊 학습 전략 조언</div>
              <div style={{ fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", wordBreak: "keep-all" }}>
                {advice}
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* 3D VISUALIZATION */}
      <main style={{ flex: 1, position: "relative", cursor: "grab" }}>
        <Canvas shadows dpr={[1, 2]}>
          <color attach="background" args={["#050505"]} />
          {/* 우상향 구도를 위해 카메라 위치를 조정 [공, 형, 민] */}
          <PerspectiveCamera makeDefault position={[130, 80, 130]} fov={35} />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[150, 150, 150]} angle={0.2} penumbra={1} intensity={1.5} />
          <pointLight position={[-50, -50, -50]} color="#4DA3FF" intensity={1} />
          
          <OrbitControls target={center} enableDamping />
          
          <Axes c={center} />
          <PointCloud data={data.data} />
          
          {/* 타원체 색상 및 밝기 강화 */}
          <Ellipsoid points={p0} color="#1E90FF" /> {/* 불합격: 선명한 블루 */}
          <Ellipsoid points={p1} color="#00FF7F" /> {/* 합격: 선명한 그린 */}
          
          {/* 사용자 포인트 강조 */}
          {customPoint && (
            <group position={customPoint}>
              <mesh>
                <sphereGeometry args={[1.8, 32, 32]} />
                <meshStandardMaterial color="#FF3030" emissive="#FF3030" emissiveIntensity={3} />
              </mesh>
              <pointLight color="#FF3030" intensity={4} distance={30} />
            </group>
          )}
        </Canvas>

        {/* Legend */}
        <div style={{ position: "absolute", bottom: isMobile ? "20px" : "30px", right: "20px", background: "rgba(0,0,0,0.7)", padding: "12px", borderRadius: "10px", fontSize: "0.75rem", pointerEvents: "none", border: "1px solid #333" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00FF7F", boxShadow: "0 0 8px #00FF7F" }} /> 합격군 분포
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#1E90FF", boxShadow: "0 0 8px #1E90FF" }} /> 불합격군 분포
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF3030", boxShadow: "0 0 8px #FF3030" }} /> 나의 위치
          </div>
        </div>
      </main>
    </div>
  );
}

function InputGroup({ label, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "0.8rem", color: "#aaa", fontWeight: "600" }}>{label}</label>
      <input 
        type="number" 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #333",
  background: "#1a1a1a", color: "white", fontSize: "1rem", outline: "none", transition: "border 0.2s"
};

const btnStyle = {
  width: "100%", padding: "14px", borderRadius: "10px", border: "none",
  background: "#4DA3FF", color: "white", fontWeight: "800", fontSize: "1rem",
  cursor: "pointer", marginTop: "10px", boxShadow: "0 4px 15px rgba(77, 163, 255, 0.3)"
};