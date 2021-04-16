import React from 'react';

function Title(props) {
    return (
        <div class="Header">
            <h2>{props.text}</h2>
            <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdrpark.kr&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
        </div>
    );
}

export default Title;