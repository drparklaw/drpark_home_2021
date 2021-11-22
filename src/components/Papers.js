import React from 'react';

const drpark_papers = [
    {
        id: 1,
        name: '최우용·박봉철',
        title: '"휴대전화전자파규제 법률의 필요성과 그 내용에 관한 연구"',
        journal: '법학연구 제21권 제2호',
        institute: '경상대학교 법학연구소',
        year: '2013.4',
        page: 'pp.499-527'
    },
    {
        id: 2,
        name: '박봉철',
        title: '"휴대전화전자파 관련 제조물책임법상 손해배상청구 방안"',
        journal: '동아법학 제88호',
        institute: '동아대학교 법학연구소',
        year: '2020.8',
        page: 'pp.57-80'
    },
    {
        id: 3,
        name: '박봉철',
        title: '"법률상담 챗봇 정책을 위한 법률요건의 퍼지화 – 토지임차인의 건물매수청구권을 중심으로"',
        journal: '일감부동산법학 제21호',
        institute: '건국대학교 법학연구소',
        year: '2020.8',
        page: 'pp.231-262'
    },
    {
        id: 4,
        name: '박봉철',
        title: '"교과용도서의 개발 및 수정에 관한 법적절차 개관"',
        journal: '법학논총 제40권 제3호',
        institute: '전남대학교 법학연구소',
        year: '2020.8',
        page: 'pp.153-170'
    },
    {
        id: 5,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 술어논리 기반 추론엔진"',
        journal: '제4차 산업혁명시대 기술변화에 따른 법적 이슈(발표논문집)',
        institute: '동아대학교 법학연구소 인문사회연구소 지원사업·충북대학교 법학연구소 공동학술대회',
        year: '2020.12',
        page: 'pp.41-54'
    },
    {
        id: 6,
        name: '박봉철',
        title: '"공유물의 보존을 위한 소수지분권자의 인도청구"',
        journal: 'Dong-A Law School Journal 제9권 제2호',
        institute: '동아법학전문대학원',
        year: '2021.2',
        page: 'pp.45-65'
    },
    {
        id: 7,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법리의 구조화와 그 표현"',
        journal: '국제교류와 융합교육 제1권 제1호',
        institute: '한국국제교육교류학회',
        year: '2021.7',
        page: 'pp.61-80'
    },
    {
        id: 8,
        name: '박봉철',
        title: '"수인의 연대채무자에 대한 동시면제"',
        journal: '아주법학 제15권 제2호',
        institute: '아주대학교 법학연구소',
        year: '2021.8',
        page: 'pp.168-187'
    },
    {
        id: 9,
        name: '박봉철',
        title: '"일방적인 앱수수료 인상에 관한 민사책임"',
        journal: '법과사회 제68호',
        institute: '법과사회이론학회',
        year: '2021.10',
        page: 'pp.353-378'
    }
]


function Papers() {

    return (
        <ol class="MethodWrapper">
            {drpark_papers.map(paper => (
                <li>{paper.name}, {paper.title}, {paper.journal}, {paper.institute}, {paper.year}, {paper.page}</li>
            ))}
        </ol>
    );
}

export default Papers;