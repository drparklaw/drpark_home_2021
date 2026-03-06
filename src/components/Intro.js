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