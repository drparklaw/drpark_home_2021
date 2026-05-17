
import React, { useMemo, useState } from "react";
import { MODELA6 } from "./MODEL_A_6";

// =========================================================
// 1. HUMAN READABLE LABELS (핵심 개선)
// =========================================================
const LABEL_MAP = {
  X6GC: "6월 공법 객관식",
  X6GE1: "6월 공법 사례1",
  X6GE2: "6월 공법 사례2",
  X6GD: "6월 공법 기록형",

  X6HC: "6월 형사법 객관식",
  X6HE1: "6월 형사법 사례1",
  X6HE2: "6월 형사법 사례2",
  X6HD: "6월 형사법 기록형",

  X6MC: "6월 민사법 객관식",
  X6ME1: "6월 민사법 사례1",
  X6ME2: "6월 민사법 사례2",
  X6ME3: "6월 민사법 사례3",
  X6MD: "6월 민사법 기록형",
};

// =========================================================
// 2. FEATURES
// =========================================================
const FEATURES = MODELA6.feature_names;

// =========================================================
// 3. Z-SCORE (data14 기준)
// =========================================================
const getZ = (value, i) => {
  const mean = MODELA6.zstats.mean[4][i];
  const sd = MODELA6.zstats.sd[4][i];

  if (!sd || sd === 0) return 0;
  return (Number(value) - mean) / sd;
};

// =========================================================
// 4. SCORE (linear model)
// =========================================================
const computeScore = (inputs) => {
  return MODELA6.weights.reduce((sum, w, i) => {
    const x = inputs[FEATURES[i]] || 0;
    const z = getZ(x, i);
    return sum + w * z;
  }, 0);
};

// =========================================================
// 5. IMPROVED TOP3 (편향 제거 버전)
// =========================================================
const getTop3 = (inputs) => {
  const entries = FEATURES.map((key, i) => {
    const x = Number(inputs[key] || 0);

    const mean = MODELA6.zstats.mean[4][i];
    const sd = MODELA6.zstats.sd[4][i];

    const z = sd ? (x - mean) / sd : 0;

    // ✔ 1) 현재 약점 (핵심)
    const weakness = Math.max(0, -z);

    // ✔ 2) 성장 가능성
    const maxZ = (MODELA6.range.max[i] - mean) / (sd || 1);
    const room = Math.max(0, maxZ - z);

    // ✔ 3) 안정성 보정 (과대표 방지)
    const stability = 1 / (sd || 1);

    const impact =
      MODELA6.weights[i] *
      weakness *
      room *
      stability;

    return {
      key,
      label: LABEL_MAP[key] || key,
      impact,
      z,
    };
  });

  return entries.sort((a, b) => b.impact - a.impact).slice(0, 3);
};

// =========================================================
// 6. MAIN COMPONENT (UI 유지)
// =========================================================
export default function BarPassPredictor() {
  const [scores, setScores] = useState({});
  const [analyzed, setAnalyzed] = useState(false);

  const handleChange = (key, value) => {
    setScores((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  // =======================================================
  // 7. RESULT ENGINE
  // =======================================================
  const prediction = useMemo(() => {
    const score = computeScore(scores);
    const pass = score > MODELA6.threshold;
    const top3 = getTop3(scores);

    return { score, pass, top3 };
  }, [scores]);

  // =======================================================
  // 8. UI (최대한 유지)
  // =======================================================
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            Bar Exam First-Time Pass Predictor
          </h1>
          <p style={{ color: "#666" }}>MODEL A (6월 기반)</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 24 }}>
          {/* LEFT */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            }}
          >
            <h2>성적 입력</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
              }}
            >
              {FEATURES.map((f) => (
                <div key={f}>
                  <label style={{ fontSize: 13 }}>
                    {LABEL_MAP[f] || f}
                  </label>

                  <input
                    type="number"
                    value={scores[f] || ""}
                    onChange={(e) => handleChange(f, e.target.value)}
                    style={{
                      width: "100%",
                      padding: 10,
                      borderRadius: 10,
                      border: "1px solid #ddd",
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setAnalyzed(true)}
              style={{
                marginTop: 30,
                width: "100%",
                padding: 18,
                borderRadius: 12,
                background: "#2563eb",
                color: "white",
                fontSize: 18,
                border: "none",
              }}
            >
              분석하기
            </button>
          </div>

          {/* RIGHT */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            }}
          >
            <h2>예측 결과</h2>

            {!analyzed ? (
              <p style={{ color: "#777" }}>분석 버튼을 눌러주세요</p>
            ) : (
              <>
                <div style={{ fontSize: 28 }}>
                  SCORE: {prediction.score.toFixed(4)}
                </div>

                <div
                  style={{
                    fontSize: 22,
                    color: prediction.pass ? "green" : "red",
                    marginTop: 10,
                  }}
                >
                  {prediction.pass ? "🎉 초시합격" : "⚠️ 불합격"}
                </div>

                {/* TOP3 */}
                {!prediction.pass && (
                  <div style={{ marginTop: 20 }}>
                    <h3>🔥 개선 TOP3</h3>

                    {prediction.top3.map((t, i) => (
                      <div key={i} style={{ marginBottom: 8 }}>
                        {i + 1}. {t.label}
                        {" "} (impact: {t.impact.toFixed(4)})
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}