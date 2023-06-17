import React from 'react';


function Image(props) {
    return (
        <div class="MoneyShot">
            <img class="MoneyShotImg" src={props.url} alt="picture" />
        </div>
    );
}

/*             <p class="ImageCaption">{props.caption}</p> */
export default Image;