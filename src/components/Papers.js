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
        title: '"공유물의 보존을 위한 소수지분권자의 인도청구"',
        journal: 'Dong-A Law School Journal 제9권 제2호',
        institute: '동아법학전문대학원',
        year: '2021.2',
        page: 'pp.45-65'
    },
    {
        id: 6,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법리의 구조화와 그 표현"',
        journal: '국제교류와 융합교육 제1권 제1호',
        institute: '한국국제교육교류학회',
        year: '2021.7',
        page: 'pp.61-80'
    },
    {
        id: 7,
        name: '박봉철',
        title: '"수인의 연대채무자에 대한 동시면제"',
        journal: '아주법학 제15권 제2호',
        institute: '아주대학교 법학연구소',
        year: '2021.8',
        page: 'pp.168-187'
    },
    {
        id: 8,
        name: '박봉철',
        title: '"일방적인 앱수수료 인상에 관한 민사책임"',
        journal: '법과사회 제68호',
        institute: '법과사회이론학회',
        year: '2021.10',
        page: 'pp.353-378'
    },
    {
        id: 9,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법적 논증의 실제 – 연대채무에서 어음채권행사에 따른 소멸시효중단의 절대효"',
        journal: '법학논문집 제45권 제3호',
        institute: '중앙대학교 법학연구원',
        year: '2021.12',
        page: 'pp.5-29'
    },
    {
        id: 10,
        name: '박봉철',
        title: '"공익사업에서 인도청구와 생활보상과의 동시이행관계"',
        journal: '외법논집 제46권 제1호',
        institute: '한국외국어대학교 법학연구소',
        year: '2022.2',
        page: 'pp.207-234'
    },
    {
        id: 11,
        name: '박봉철',
        title: '"4차산업시대에서 술어논리 교과목 도입의 필요성"',
        journal: '교과와교과서연구 제2권 제1호',
        institute: '교과와 교과서학회',
        year: '2022.6',
        page: 'pp.107-123'
    }
]


function Papers() {

    return (
        <ol class="MethodWrapper">
            {drpark_papers.slice(0).reverse().map(paper => (
                <li>{paper.name}, {paper.title}, {paper.journal}, {paper.institute}, {paper.year}, {paper.page}</li>
            ))}
        </ol>
    );
}

export default Papers;