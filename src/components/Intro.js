import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">환영합니다. 저는 공학과 법학을 융합하여 세상에 없던 새로운 콘텐츠를 만들고 있습니다. 함께 하실 분은 지금 연락주세요.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;