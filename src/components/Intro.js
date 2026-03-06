import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Welcome! I'm a professor at Dong-A University Law School. My academic focus is on Korean Civil Law, with a particular interest in the evolving field of computational law and legal data analysis. Wishing you a great day!</p>
            <Image url="drpark_png.png" caption="What truly is logic? ..." />
        </div>
    );
}

export default Intro;