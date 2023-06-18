import React from 'react';


function CrimeList() {
    return (
        <div>

            <table>
            <tr>
                <th>범죄</th>
                <th>관련조문</th>
                <th>시간당 발생수</th>
            </tr>
            <tr>
                <td><img src="fraud150.png"></img><figcaption>사기</figcaption></td>
                <td>형법 347조, 347조의2</td>
                <td>36.12</td>
            </tr>
            <tr>
                <td><img src="trafficAccident150.png"></img><figcaption>교통사고</figcaption></td>
                <td>교통사고처리법 3조1항<br />
            특정범죄가중법 5조의3, 5조의11</td>
                <td>22.20</td>
            </tr>
            <tr>
                <td><img src="violence150.png"></img><figcaption>상해·폭행</figcaption></td>
                <td>형법 257조1항, 260조1항, 261조</td>
                <td>20.93</td>
            </tr>
            <tr>
                <td><img src="larceny150.png"></img><figcaption>절도</figcaption></td>
                <td>형법 329조, 330조, 331조</td>
                <td>19.85</td>
            </tr>
            <tr>
                <td><img src="destruction150.png"></img><figcaption>손괴</figcaption></td>
                <td>형법 366조, 368조1항, 369조1항</td>
                <td>6.52</td>
            </tr>
            <tr>
                <td><img src="defamation150.png"></img><figcaption>명예훼손·모욕</figcaption></td>
                <td>형법 307조2항, 309조2항, 311조<br />
정보통신망법 70조2항</td>
                <td>4.57</td>
            </tr>
            <tr>
                <td><img src="wage150.png"></img><figcaption>임금·퇴직금</figcaption></td>
                <td>근로기준법 109조, 43조<br />
퇴직급여법 44조1호2호</td>
                <td>4.28</td>
            </tr>
            <tr>
                <td><img src="business150.png"></img><figcaption>업무·경매·입찰방해</figcaption></td>
                <td>형법 314조, 315조</td>
                <td>2.42</td>
            </tr>
            <tr>
                <td><img src="intimidation150.png"></img><figcaption>협박</figcaption></td>
                <td>형법 283조1항, 284조</td>
                <td>2.35</td>
            </tr>
            <tr>
                <td><img src="breakIn150.png"></img><figcaption>주거침입</figcaption></td>
                <td>형법 319조, 320조</td>
                <td>2.06</td>
            </tr>
            <tr>
                <td><img src="embezzlement150.png"></img><figcaption>횡령</figcaption></td>
                <td>형법 355조1항, 356조</td>
                <td>1.80</td>
            </tr>
            <tr>
                <td><img src="molestation150.png"></img><figcaption>강제추행</figcaption></td>
                <td>형법 298조</td>
                <td>1.65</td>
            </tr>
            <tr>
                <td><img src="resistingOfficer150.png"></img><figcaption>공무방해</figcaption></td>
                <td>형법 136조, 137조, 144조</td>
                <td>1.25</td>
            </tr>
            <tr>
                <td><img src="obstruction150.png"></img><figcaption>권리행사방해</figcaption></td>
                <td>형법 323조, 324조, 325조, 326조, 327조</td>
                <td>1.05</td>
            </tr>
            <tr>
                <td><img src="counterfeit150.png"></img><figcaption>사문서위조·변조</figcaption></td>
                <td>형법 231조, 232조의2, 234조</td>
                <td>0.99</td>
            </tr>
            <tr>
                <td><img src="copyright150.png"></img><figcaption>저작권침해</figcaption></td>
                <td>저작권법 136조</td>
                <td>0.82</td>
            </tr>
            </table>

            <h6>근거: 검찰청(범죄발생통계) 및 경찰청(범죄발생통계), 최근 3년간(2021년, 2020년, 2019년)의 평균치</h6>

        </div>
    );
}

export default CrimeList;