import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">반갑습니다. 저는 동아대 로스쿨에서 민사실무, 민사소송법 등을 강의하고 있습니다. 평소 인공지능 변호사 개발에 관심이 많은데요, 함께 하실 분은 연락주시기 바랍니다.</p>
            <Image url="myOffice.png" caption="What truly is logic? ..." />
        </div>
    );
}

export default Intro;