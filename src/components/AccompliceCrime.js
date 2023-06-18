import React from 'react';


function AccompliceCrime() {
    return (
        <div>

            <table>
            <tr>
                <th></th>
                <th>2021년</th>
                <th>2020년</th>
                <th>2019년</th>
            </tr>
            <tr>
                <td>전체범죄</td>
                <td>1,247,680</td>
                <td>1,494,421</td>
                <td>1,585,638</td>
            </tr>
            <tr>
                <td>공범범죄</td>
                <td>152,958</td>
                <td>180,786</td>
                <td>190,757</td>
            </tr>
            <tr>
                <td>비율(%)</td>
                <td>12.26</td>
                <td>12.10</td>
                <td>12.03</td>
            </tr>
 
            </table>

            <h6>근거: 경찰청(범죄발생통계)</h6>

        </div>
    );
    
}

export default AccompliceCrime;