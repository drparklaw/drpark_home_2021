import React from 'react';
import Cases from '../components/Cases';

function NewCases() {
    return(
    <div>
        <h4><i class="fas fa-bullhorn fa-lg"> 최신 판례</i></h4>
        <Cases />
        <hr color="#f0f0f0" />
    </div>);
}

export default NewCases;