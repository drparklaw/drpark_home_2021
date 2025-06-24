import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [today, setToday] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://visit-counter.drparklaw.workers.dev/api/visit');
        const data = await response.json();
        console.log("Fetched visitor data:", data);  // 디버깅용
        setToday(data.today);
        setTotal(data.total);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontSize: '0.9rem', marginTop: '10px' }}>
      {today !== null && total !== null ? (
        <span>Today: {today} / Total: {total}</span>
      ) : (
        <span>Loading...</span>  // 또는 아무것도 안 보여줘도 됩니다
      )}
    </div>
  );
};

export default VisitorCounter;