import React from 'react';
import Image from '../components/Image';

function Intro() {
    return (
        <div className="IntroWrapper">
            <p className="IntroText">Welcome! I am a professor at Dong-A University Law School. My teaching focuses on Korean Civil Law, and my research interests include legal data and computational law.<br />By giving legal content an engineering form, I aim to make the law more accessible—because it must be understood before it can be followed.
   
      <br />
      <br />

        <div class="Ingredients2">
            <table>
            <tr>
                <td>
                <i class="fas fa-phone"></i> +82-51-200-8513
                </td>
            </tr>
            <tr>
                <td>
                <i class="fas fa-envelope"></i> drparklaw [at] gmail.com
                </td>
            </tr>
            <tr>
                <td>
                <i class="fas fa-location-arrow"></i> #604, Law School Bldg, 225 Gudeok-ro, Seo-gu, Busan
                </td>
            </tr>
            </table></div>


            </p>

    
            <Image url="drpark_latest.png" caption="What truly is logic? ..." />

        </div>
    );
}

export default Intro;

{/*
 여기에 주석을 작성합니다. 이 내용은 화면에 보이지 않습니다. */}


