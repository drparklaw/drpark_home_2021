import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import NameCard from '../components/NameCard';
import Career from '../components/Career';
import Papers from '../components/Papers';


function About() {
  return (

    <div>
      <Title text="안녕하세요 박봉철입니다"/>
      <Intro />
      <NameCard />
      <h3>주요 이력</h3>
      <Career />
      <h3>법학 논문</h3>
      <Papers />
    </div>

  );
}

export default About;