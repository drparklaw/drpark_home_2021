import React from 'react';
import '../css/styles.css';


function Title(props) {
    return (
        <div class="Header">
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;