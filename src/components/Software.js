import React from 'react';

const drpark_software = [
    {
        id: 1,
        name: 'http://dongalaw.org',
        title: '동아로스쿨 내신 과목을 위한 CBT 시스템',
        publisher: '엣지(Edge)에 최적화',
        year: '2023.11.'
    }
]



function Softwares() {

    return (
        <ol class="MethodWrapper">
            {drpark_software.slice(0).reverse().map(sw => (
                <li>{sw.name}, {sw.title}, {sw.publisher}, {sw.year}</li>
            ))}
        </ol>
    );
}

export default Softwares;
