import React from 'react';
import Title from '../components/Title';
import CrimeList from '../components/CrimeList';
import AccompliceCrime from '../components/AccompliceCrime';

function SGFactor() {
    return (
  
      <div class="crimeTable">
        <Title text="범죄 통계"/>

        <h3><i class="fas fa-gavel"></i> 시간당 1건 이상 발생하면서 양형기준이 설정된 범죄</h3>
        <CrimeList />
        <br />

        
        <h3><i class="fas fa-gavel"></i> 공범 비율</h3>
        <AccompliceCrime />
        <br />
        <br /> 
        <br />
      </div>
  
    );
  }
  
  export default SGFactor;
