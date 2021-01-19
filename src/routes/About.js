import React from 'react';
import NameCard from '../components/NameCard';
import Papers from '../components/Papers';
import Career from '../components/Career';

function About() {
  return (
    <div>
      <h3>주요 이력</h3>
      <Career />
      <h3>법학 논문</h3>
      <Papers />
    </div>

  );
}

export default About;