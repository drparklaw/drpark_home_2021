import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">반갑습니다. 동아로스쿨에서 <span class="emphasis">민사실무, 민사소송법</span> 등을 강의하고 법률데이터와 인공지능 변호사를 연구하고 있습니다. 오늘도 행복하세요~</p>
            <Image url="myOffice.png" caption="What truly is logic? ..." />
        </div>
    );
}

export default Intro;