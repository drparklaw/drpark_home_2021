import React from 'react';


function CrimeList() {
    return (
        <div>

            <table>
            <tr>
                <th>범죄유형</th>
                <th>관련조문</th>
                <th>시간당 발생건수</th>
            </tr>
            <tr>
                <td>사기</td>
                <td>형법 347조</td>
                <td>29.56</td>
            </tr>
            <tr>
                <td>교통사고</td>
                <td>교통사고처리법 3조1항<br />
            특정범죄가중법 5조의3, 5조의11</td>
                <td>23.75</td>
            </tr>
            <tr>
                <td>상해·폭행</td>
                <td>형법 257조1항, 260조1항</td>
                <td>21.11</td>
            </tr>
            <tr>
                <td>절도</td>
                <td>형법 329조, 330조, 331조</td>
                <td>20.46</td>
            </tr>
            <tr>
                <td>임금·퇴직금</td>
                <td>근로기준법 109조, 43조<br />
퇴직급여법 44조1호2호</td>
                <td>6.81</td>
            </tr>
            <tr>
                <td>손괴</td>
                <td>형법 366조, 368조1항, 369조1항</td>
                <td>6.51</td>
            </tr>
            <tr>
                <td>명예훼손·모욕</td>
                <td>형법 307조2항, 309조2항, 311조<br />
정보통신망법 70조2항</td>
                <td>3.86</td>
            </tr>
            <tr>
                <td>업무·경매입찰방해</td>
                <td>형법 314조, 315조<br />
건설산업기본법 95조</td>
                <td>2.64</td>
            </tr>
            <tr>
                <td>협박</td>
                <td>형법 283조1항, 284조</td>
                <td>2.00</td>
            </tr>
            <tr>
                <td>횡령</td>
                <td>형법 355조1항, 356조</td>
                <td>1.95</td>
            </tr>
            <tr>
                <td>권리행사방해</td>
                <td>형법 323조, 324조, 325조, 327조</td>
                <td>1.38</td>
            </tr>
            <tr>
                <td>공무방해</td>
                <td>형법 136조, 137조, 144조</td>
                <td>1.33</td>
            </tr>
            <tr>
                <td>강제추행</td>
                <td>형법 298조</td>
                <td>1.30</td>
            </tr>
            <tr>
                <td>저작권침해</td>
                <td>저작권법 136조</td>
                <td>1.16</td>
            </tr>
            <tr>
                <td>사문서위조·변조</td>
                <td>형법 231조, 232조</td>
                <td>0.97</td>
            </tr>
            </table>

            <h6>출처: 경찰청(경찰청범죄통계), 검찰청(범죄분석통계), 최근 3년간 평균</h6>

        </div>
    );
}

export default CrimeList;