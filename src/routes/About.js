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