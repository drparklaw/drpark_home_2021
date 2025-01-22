import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import NameCard from '../components/NameCard';
import Career from '../components/Career';
import Exam from '../components/Exam';
import Books from '../components/Books';
import Papers from '../components/Papers';



function About() {
  return (

    <div>
      <Title text="Hello, I'm Bongcheol Park."/>
      <Intro />

      <NameCard />
      <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdrpark.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
      <h3>Profile</h3>
      <Career />
      <h3>Bar Exam Contributions</h3>
      <Exam />
      <h3>Legal Articles (Korean)</h3>
      <Papers />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  );
}

export default About;