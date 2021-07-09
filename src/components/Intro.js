import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">In law school I'm doing research and development on AI Lawyer of Korea.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;