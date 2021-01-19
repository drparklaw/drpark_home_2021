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