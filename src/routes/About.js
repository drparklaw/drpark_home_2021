import React from 'react';
import NameCard from '../components/NameCard';
import Papers from '../components/Papers';
import Career from '../components/Career';

function About() {
  return (
    <div>
      <h1>박봉철 입니다</h1>
      <NameCard />
      <h3>주요경력</h3>
      <Career />
      <h3>법학논문</h3>
      <Papers />
    </div>
  );
}

export default About;