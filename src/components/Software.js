import React from 'react';

const drpark_software = [
    {
        id: 1,
        name: 'http://dongalaw.org',
        title: '"동아로스쿨 내신 CBT 시스템"',
        publisher: '노트북용(Mac호환)',
        year: '2023.11'
    },
    {
        id: 2,
        name: '법무부',
        title: '"제13회 변호사시험 시험위원"',
        publisher: '채점위원',
        year: '2024.2'
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
