import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">환영합니다. 저는 동아대 로스쿨에서 민사실무 등을 강의하고 있습니다. 평소 한국의 인공지능 변호사 개발에 관심이 많은데요, 함께 하실 분은 언제든지 연락주세요.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;