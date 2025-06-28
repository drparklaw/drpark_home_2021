import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [countData, setCountData] = useState(null); // ✅ 여기가 중요!

 useEffect(() => {
  const fetchCounts = async () => {
    try {
      console.log("Fetching visitor count...");
      const res = await fetch("https://visit-counter.drparklaw.workers.dev/api/visit");
      const text = await res.text();
      console.log("Raw text data:", text);

      const dailyMatch = text.match(/Today.*?:\s*(\d+)/);
      const totalMatch = text.match(/Total:\s*(\d+)/);

      const daily = dailyMatch ? parseInt(dailyMatch[1], 10) : 0;
      const total = totalMatch ? parseInt(totalMatch[1], 10) : 0;

      console.log("Parsed counts:", { daily, total });

      setCountData({ daily, total });
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  fetchCounts();
}, []);

  return (
    <div>
      {countData ? (
        <div>
          <p>Today: {countData.daily}</p>
          <p>Total: {countData.total}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VisitorCounter;