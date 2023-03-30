import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">반갑습니다. 저는 동아대 로스쿨에서 민사실무 등을 강의합니다. 평소 법률데이터 구축이나 인공지능 변호사에 관하여 고민하고 있습니다. 궁금하신 점이 있다면 아래 연락처로 연락주시기 바랍니다.</p>
            <Image url="myOffice.png"/>
        </div>
    );
}

export default Intro;