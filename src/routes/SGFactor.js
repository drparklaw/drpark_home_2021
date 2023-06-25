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
{/* 
        <h3><i class="fas fa-gavel"></i> 양형데모(사기죄)</h3>

        <div>
          <p>1. 범죄를 선택하세요</p>
          <select id="pickCrime" onChange="selectCrime()">
              <option value="">선택하세요</option>
              <option value="사기">사기(347조)</option>
              <option value="컴퓨터등사용사기">컴퓨터등사용사기(347조의2)</option>
              <option value="준사기">준사기(348조)</option>
              <option value="상습사기">상습사기(347조, 347조의2, 348조에 한함)</option>
              <option value="특경법사기">특경법사기(특경법 3조1항)</option>
          </select>
        </div> */}

        <br />
        <br /> 
        <br />
      </div>
  
    );
  }
  
  export default SGFactor;
