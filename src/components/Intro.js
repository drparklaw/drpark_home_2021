import React from "react";
import ModelViewer from "../components/ModelViewer";

function Intro() {
  return (
    <div className="IntroWrapper">

      <p className="IntroText">Welcome! I am a professor at Dong-A University Law School.
My teaching focuses on Korean Civil Law, and my research interests include legal data and computational law.</p>

      <ModelViewer />

    </div>
  );
}

export default Intro;

{/*
import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Welcome! I’m a professor at Dong-A University Law School. While my teaching expertise lies in Korean Civil Law, I am deeply engaged in research regarding legal data and computational law. Have a wonderful day!</p>
            <Image url="drpark_png.png" caption="What truly is logic? ..." />
        </div>
    );
}

export default Intro;



 import React from 'react';
import ModelViewer from '../components/ModelViewer';

function Intro() {
    return (
        <div className="IntroWrapper">
            <p className="IntroText">
            Welcome! I’m a professor at Dong-A University Law School.
            While my teaching expertise lies in Korean Civil Law, I am deeply
            engaged in research regarding legal data and computational law.
            Have a wonderful day!
            </p>

            <ModelViewer />
        </div>
    );
}

export default Intro;
 여기에 주석을 작성합니다. 이 내용은 화면에 보이지 않습니다. */}


