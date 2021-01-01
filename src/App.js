import React from 'react';
import NameCard from './NameCard';
import Papers from './Papers';
import Career from './Career';

function App() {
  return (
    <div>
      <h1>박봉철 입니다</h1>
      <NameCard />
      <h3>주요경력</h3>
      <Career />
      <h3>법학논문</h3>
      <Papers />
    </div>
  )
}

export default App;