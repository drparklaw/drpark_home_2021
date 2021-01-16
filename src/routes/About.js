import React from 'react';
import NameCard from '../components/NameCard';
import Papers from '../components/Papers';
import Career from '../components/Career';

function About() {
  return (
    <div>
      <h3>Career</h3>
      <Career />
      <h3>Recent Papers</h3>
      <Papers />
    </div>

  );
}

export default About;