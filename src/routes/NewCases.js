import React from 'react';
import Title from '../components/Title';
import Cases from '../components/Cases';

function NewCases() {
    return(
    <div>
        <Title text="최신 판례"/>
        <Cases />
        <hr color="#f0f0f0" />
    </div>);
}

export default NewCases;