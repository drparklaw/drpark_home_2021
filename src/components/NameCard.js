import React from 'react';

function NameCard() {

    return (
    <ul>
        <li>직업: 동아로스쿨 조교수</li>
        <li>전화: 051-200-8513</li>
        <li>강의: 민사실무, 민사소송법 등</li>
        <li>연구 <details><summary>인공지능 변호사</summary><p>헤이 진짜 즐거용. </p></details></li>
    </ul>);
}

export default NameCard;