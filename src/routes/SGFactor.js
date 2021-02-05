import React from 'react';
import Title from '../components/Title';
import CrimeList from '../components/CrimeList';
import UnilateralCrime from '../components/UnilateralCrime';

function SGFactor() {
  return (

    <div>
      <Title text="범죄 통계 (소스: 국가통계포털)"/>

      <h3><i class="fas fa-gavel"></i> 시간당 1건 이상 발생하는 범죄</h3>
      <CrimeList />
      <br />
      <h3><i class="fas fa-gavel"></i> 단독범죄가 전체범죄의 90% 이상</h3>
      <UnilateralCrime />
    </div>

  );
}

export default SGFactor;