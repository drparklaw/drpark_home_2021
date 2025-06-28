import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [countData, setCountData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch("https://visit-counter.drparklaw.workers.dev/api/visit");
        if (!response.ok) throw new Error("Network response was not ok");

        const text = await response.text();

        const dailyMatch = text.match(/Today.*?:\s*(\d+)/);
        const totalMatch = text.match(/Total:\s*(\d+)/);

        const daily = dailyMatch ? parseInt(dailyMatch[1], 10) : 0;
        const total = totalMatch ? parseInt(totalMatch[1], 10) : 0;

        setCountData({ daily, total });
      } catch (err) {
        console.error("Fetch error:", err);
        setError("방문자 수를 불러올 수 없습니다.");
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{
      fontFamily: "system-ui, sans-serif",
      fontSize: "14px",
      color: "#333",
      padding: "12px 16px",
      border: "1px solid #e0e0e0",
      borderRadius: "6px",
      maxWidth: "240px"
    }}>
      {error ? (
        <p style={{ color: "#e53935" }}>{error}</p>
      ) : countData ? (
        <>
          <p style={{ margin: "2px 0" }}>Today : <strong>{countData.daily}</strong></p>
          <p style={{ margin: "2px 0" }}>Total : <strong>{countData.total}</strong></p>
        </>
      ) : (
        <p style={{ color: "#aaa" }}>Loading...</p>
      )}
    </div>
  );
};

export default VisitorCounter;