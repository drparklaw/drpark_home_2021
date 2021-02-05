import React from 'react';
import '../css/styles.css';


function Image(props) {
    return (
        <div class="MoneyShot">
            <img class="MoneyShotImg" src={props.url} alt="picture" />
            <p class="ImageCaption">{props.caption}</p>
        </div>
    );
}

export default Image;