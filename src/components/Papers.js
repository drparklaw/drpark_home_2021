import React from 'react';

const drpark_papers = [
    {
        id: 1,
        name: '최우용·박봉철',
        title: '"휴대전화전자파규제 법률의 필요성과 그 내용에 관한 연구"',
        journal: '법학연구 제21권 제2호',
        institute: '경상대학교 법학연구소',
        year: '2013.4',
        page: 'pp.499-527',
        pic: '휴대폰전자파(2013).png'
    },
    {
        id: 2,
        name: '박봉철',
        title: '"휴대전화전자파 관련 제조물책임법상 손해배상청구 방안"',
        journal: '동아법학 제88호',
        institute: '동아대학교 법학연구소',
        year: '2020.8',
        page: 'pp.57-80',
        pic: '제조물책임(2020).png'
    },
    {
        id: 3,
        name: '박봉철',
        title: '"법률상담 챗봇 정책을 위한 법률요건의 퍼지화 – 토지임차인의 건물매수청구권을 중심으로"',
        journal: '일감부동산법학 제21호',
        institute: '건국대학교 법학연구소',
        year: '2020.8',
        page: 'pp.231-262',
        pic: '퍼지(2020).png'
    },
    {
        id: 4,
        name: '박봉철',
        title: '"교과용도서의 개발 및 수정에 관한 법적절차 개관"',
        journal: '법학논총 제40권 제3호',
        institute: '전남대학교 법학연구소',
        year: '2020.8',
        page: 'pp.153-170',
        pic: '교과용도서(2020).png'
    },
    {
        id: 6,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법리의 구조화와 그 표현"',
        journal: '국제교류와융합교육 제1권 제1호',
        institute: '한국국제교육교류학회',
        year: '2021.7',
        page: 'pp.61-80',
        pic: ''
    },
    {
        id: 7,
        name: '박봉철',
        title: '"수인의 연대채무자에 대한 동시면제"',
        journal: '아주법학 제15권 제2호',
        institute: '아주대학교 법학연구소',
        year: '2021.8',
        page: 'pp.168-187',
        pic: '동시면제(2021).png'
    },
    {
        id: 8,
        name: '박봉철',
        title: '"일방적인 앱수수료 인상에 관한 민사책임"',
        journal: '법과사회 제68호',
        institute: '법과사회이론학회',
        year: '2021.10',
        page: 'pp.353-378',
        pic: '인앱결제(2021).png'
    },
    {
        id: 9,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법적 논증의 실제 – 연대채무에서 어음채권행사에 따른 소멸시효중단의 절대효"',
        journal: '법학논문집 제45권 제3호',
        institute: '중앙대학교 법학연구원',
        year: '2021.12',
        page: 'pp.5-29',
        pic: '법적논증(2021).png'
    },
    {
        id: 10,
        name: '박봉철',
        title: '"공익사업에서 인도청구와 생활보상과의 동시이행관계"',
        journal: '외법논집 제46권 제1호',
        institute: '한국외국어대학교 법학연구소',
        year: '2022.2',
        page: 'pp.207-234',
        pic: '공익사업(2022).png'
    },
    {
        id: 11,
        name: '박봉철',
        title: '"4차산업시대에서 술어논리 교과목 도입의 필요성"',
        journal: '교과와교과서연구 제2권 제1호',
        institute: '교과와 교과서학회',
        year: '2022.6',
        page: 'pp.107-123',
        pic: ''
    },
    {
        id: 12,
        name: '박창언·박봉철',
        title: '"국가교육과정 수립·변경의 법적 구조와 과제"',
        journal: '교육공동체연구와실천 제5권 제2호',
        institute: '부산대학교 지역혁신역량교육연구센터',
        year: '2023.8',
        page: 'pp.79-98',
        pic: ''
    }, 
    {
        id: 13,
        name: '박봉철',
        title: '"인공지능 변호사를 위한 법률데이터 구축 방안"',
        journal: '법학논문집 제47권 제2호',
        institute: '중앙대학교 법학연구원',
        year: '2023.8',
        page: 'pp.43-77',
        pic: '법률데이터(2023).png'
    },
    {
        id: 14,
        name: '박봉철',
        title: '"민법 개정에 따른 EU디지털지침 제9조의 도입 방안"',
        journal: '아주법학 제17권 제2호',
        institute: '아주대학교 법학연구소',
        year: '2023.8',
        page: 'pp.105-132',
        pic: 'EU디지털지침(2023).png'
    },
    {
        id: 15,
        name: '박봉철',
        title: '"판례에 따른 유류분 부족액의 계산과 검산"',
        journal: '홍익법학 제24권 제3호',
        institute: '홍익대학교 법학연구소',
        year: '2023.9',
        page: 'pp.289-320',
        pic: '유류분(2023).png'
    },
    {
        id: 16,
        name: '박봉철',
        title: '"소수지분권자의 위법한 공유물 점유에 관한 판결 유감(遺憾) – 대법원 2020. 9. 7. 선고 2017다204810 판결의 소개"',
        journal: '법조 제72권 제6호',
        institute: '법조협회',
        year: '2023.12',
        page: 'pp.404-433',
        pic: '공유물소수지분권자(2023).png'
    }               
]


function Papers() {

    return (
        <ol class="MethodWrapper">
            {drpark_papers.slice(0).reverse().map(paper => (
                <li>{paper.name}, <a href={paper.pic}>{paper.title}</a>, {paper.journal}, {paper.institute}, {paper.year}, {paper.page}</li>
            ))}
        </ol>
    );
}

export default Papers;