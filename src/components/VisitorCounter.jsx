import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [today, setToday] = useState('?');
  const [total, setTotal] = useState('?');

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch('https://visit-counter.drparklaw.workers.dev/api/visit');
        const data = await response.json();
        setToday(data.today);   // <- 여기서 숫자가 들어가야 함
        setTotal(data.total);
        console.log('Visit data:', data);
      } catch (error) {
        console.error('Visitor count fetch failed:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ fontSize: '14px', textAlign: 'center', marginTop: '20px' }}>
      <strong>Today:</strong> {today} / <strong>Total:</strong> {total}
    </div>
  );
};

export default VisitorCounter;