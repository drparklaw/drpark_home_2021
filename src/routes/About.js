import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import NameCard from '../components/NameCard';
import Career from '../components/Career';
import Softwares from '../components/Software';
import Books from '../components/Books';
import Papers from '../components/Papers';



function About() {
  return (

    <div>
      <Title text="안녕하세요 박봉철입니다"/>
      <Intro />

      <NameCard />
      <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdrpark.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
      <h3>주요 이력</h3>
      <Career />
      <h3>법학 수험</h3>
      <Softwares />
      <h3>법학 저서</h3>
      <Books />
      <h3>법학 논문</h3>
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