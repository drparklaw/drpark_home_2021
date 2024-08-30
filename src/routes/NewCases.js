import React from 'react';
import Title from '../components/Title';
import Cases from '../components/Cases';

function NewCases() {
    return(
    <div>
        <Title text="Latest Cases"/>
        <Cases />
        <hr color="#f0f0f0" />
    </div>);
}

export default NewCases;