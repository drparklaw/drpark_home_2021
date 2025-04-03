import React from 'react';

const drpark_industry = [
    {
        id: 1,
        name: '박봉철',
        title: '"인재양성 데이터 국가전략 연구"',
        period: '2023.4. - 2023.12.',
        supporter: '한국교육개발원',
        position: '과제책임자',
        number: '동아대 산학협력단 과제번호(2023-0442)',
        link: 'https://www.kedi.re.kr'
    },
    {
        id: 2,
        name: '박봉철',
        title: '"아이폰용 민사법 퀴즈앱 개발"',
        period: '2023.11. - 2024.3.',
        supporter: '(주)로드믹',
        position: '과제책임자',
        number: '동아대 산학협력단 과제번호(2023-0868)',
        link: 'http://lawthmic.com'
    }
]



function Industry() {

    return (
        <ol>
            {drpark_industry.slice(0).reverse().map(proj => (
                <li>{proj.period}, {proj.title}, {proj.number}, <a href={proj.link}>{proj.supporter}</a></li>
            ))}
        </ol>
    );
}

export default Industry;
