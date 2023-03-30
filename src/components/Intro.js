import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">환영합니다. 동아로스쿨의 박봉철 입니다. 저는 법학과 공학을 융합해서 새로운 디지털 콘텐츠를 만들고 있습니다. 함께 하실 분은 언제든 연락주세요.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;