import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">환영합니다. 저는 공학과 법학을 융합하여 새로운 디지털 콘텐츠를 만들고 있습니다. 궁금하신 점이 있다면 편하게 연락주시기 바랍니다.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;