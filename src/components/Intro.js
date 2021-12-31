import React from 'react';
import Image from '../components/Image';


function Intro() {
    return (
        <div class="IntroWrapper">
            <p class="IntroText">Given legal data in Blockchain, I am developing an AI lawyer of Korea using predicate logic, fuzzy theory, and other mathematical tools.</p>
            <Image url="drparkPicture.jpg" caption="Picture in 2014" />
        </div>
    );
}

export default Intro;