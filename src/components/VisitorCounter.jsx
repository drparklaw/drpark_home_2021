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
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {countData ? (
        <div>
          <p>Today: {countData.daily}</p>
          <p>Total: {countData.total}</p>
        </div>
      ) : !error ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};

export default VisitorCounter;