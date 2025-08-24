import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Greetings, I am a professor at Dong-A Univ. Law School, specializing in Korean civil law. My research focuses on legal data and computational law. Wishing you a wonderful day!</p>
            <Image url="drpark_png.png" caption="What truly is logic? ..." />
        </div>
    );
}

export default Intro;