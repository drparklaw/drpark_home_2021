<!DOCTYPE html>
<html>
<head>
    <title>대전살던 해운대 변호사</title>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">



    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
</head>
<body>


   
<div class="w3-container w3-margin-top w3-margin-bottom">

    <div class="w3-panel w3-leftbar w3-border-blue w3-margin-top"><h2>사기범죄 양형기준  <a href="https://bigbeach.kr/"><i class="fas fa-home"></i></a></h2></div>

    <div class="w3-panel w3-card-4 w3-light-blue w3-round-large">
        <p class="w3-xlarge w3-margin-top">1. 범죄를 선택하세요</p>
        <select class="w3-margin-top w3-margin-bottom" id="pickCrime" onChange="selectCrime()">
            <option value="">선택하세요</option>
            <option value="사기">사기(347조)</option>
            <option value="컴퓨터등사용사기">컴퓨터등사용사기(347조의2)</option>
            <option value="준사기">준사기(348조)</option>
            <option value="상습사기">상습사기(347조, 347조의2, 348조에 한함)</option>
            <option value="특경법사기">특경법사기(특경법 3조1항)</option>
        </select>
    </div>

    <div class="w3-panel w3-card-4 w3-light-blue w3-round-large">
        <p class="w3-xlarge w3-margin-top">2. 피해액을 정해주세요</p>
        <select class="w3-margin-top w3-margin-bottom" id="damage" onChange="selectDamage()">
            <option value="">선택하세요</option>
            <option value="1유형">1억원 미만</option>
            <option value="2유형">1억원 이상, 5억원 미만</option>
            <option value="3유형">5억원 이상, 50억원 미만</option>
            <option value="4유형">50억원 이상, 300억원 미만</option>
            <option value="5유형">300억원 이상</option>
        </select>
    </div>

    <div class="w3-panel w3-card-4 w3-light-blue w3-round-large">
        <p class="w3-xlarge w3-margin-top">3. 교사범인 경우 체크 <button data-tippy="특수: 자기의 지휘·감독을 받는 자를 관련시킨 경우" class="w3-light-blue w3-round-large"><b>&nbsp;i&nbsp;</b></button></p>
        <div class="w3-margin-top w3-margin-bottom w3-large">
            <input name="instigator" id="rIns0" type="radio" value="교사" onclick="radioIns(0)"> 교사 
            <span class="w3-margin-left"></span>
            <input name="instigator" id="rIns1" type="radio" value="특수교사" onclick="radioIns(1)"> 특수교사
        </div>
    </div>

    <div class="w3-panel w3-card-4 w3-light-blue w3-round-large">
        <p class="w3-xlarge w3-margin-top">4. 누범인 경우 체크</p>
        <div class="w3-margin-top w3-margin-bottom w3-large">
            <input id="repeater" type="checkbox" onChange="checkRepeater()"> 금고 이상의 형을 받고 그 집행을 종료하거나 면제 받은 후 3년 내인 경우<br>
        </div>
    </div>

    <div class="w3-panel w3-card-4 w3-light-blue w3-round-large">
        <p class="w3-xlarge w3-margin-top">5. 사기 유형 <button data-tippy="조직적: 다수가 역할을 분담하여 사전에 치밀하게 계획한 경우(보이스피싱, 보험사기 등)" class="w3-light-blue w3-round-large"><b>&nbsp;i&nbsp;</b></button></p>
        <div class="w3-margin-top w3-margin-bottom w3-large">
            <input name="crimeType" id="rType0" type="radio" value="일반 사기" onclick="radioType(0)"> 일반 사기
            <span class="w3-margin-left"></span>
            <input name="crimeType" id="rType1" type="radio" value="조직적 사기" onclick="radioType(1)"> 조직적 사기
        </div>
    </div>


</div>

<div class="w3-container">

    <div class="w3-large" id="listFactor">
    </div>

</div>


<div class="w3-container">

    <button onclick="submitFunction()" id="submitButton" class ="w3-block w3-btn w3-blue w3-xlarge w3-round-large w3-margin-top w3-margin-bottom" style="display:none">결 과 보 기</button>

</div>


<div class="w3-container">
    <div id="resultNote" class="w3-modal">
        <div class="w3-modal-content w3-card-4">
            <header class="w3-container w3-blue"> 
            <span onclick="document.getElementById('resultNote').style.display='none'" class="w3-button w3-display-topright w3-xlarge">&times;</span>
                <h3>양형 결과</h3>
            </header>
            <div id="resultMsg" class="w3-container">
            </div>
            <footer class="w3-container w3-blue">
                <h5>※ 내부도구의 데모이므로 결과로 인한 어떠한 책임도 지지 않습니다</h5>
            </footer>
        </div>
    </div>
</div>



<script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@4"></script>


<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="></script>



<script>

var gCrime = "";  // 범죄명
var gDamage = ""; // 피해액의 유형
var gRadioIns = [false, false]; // 교사-특수교사
var gRepeater = false; // 누범
var gRadioType = [false, false];  // 일반사기-조직적사기


var gTag0 = [];  var gTag1 = [];
var gNumActGoodS; var gNumActGoodG; var gNumActorGoodS; var gNumActorGoodG;
var gNumActBadS; var gNumActBadG; var gNumActorBadS; var gNumActorBadG;
var gNumSusGoodS; var gNumSusGoodG; var gNumSusBadS; var gNumSusBadG;

// 결과값
var ggMinFinal = 0;
var ggMaxFinal = 0;
var gSuspend = "";



function submitFunction() {

    if(gCrime === "" && gDamage === "") {
        alert("범죄를 선택하고 피해액을 정해주세요");
        return;
    }

    if(gCrime === "") {
        alert("범죄를 선택해 주세요");
        return;
    }

    if(gDamage === "") {
        alert("피해액을 정해주세요");
        return;
    }

    simulation();




    var out = "";
    out += '<table class="w3-table w3-large">';
    out += '<tr><td>선고형의 범위</td><td>' + easyYear(gMinFinal) + '에서 ' + easyYear(gMaxFinal) + '</td></tr>';
    out += '<tr><td>집행유예 여부</td><td>' + gSuspend + '</td></tr>';
    out += '</table>';
   

    document.getElementById("resultMsg").innerHTML = out;
    document.getElementById("resultNote").style.display = "block";

}


function simulation() {
    
        // 법정형
        var minLP = 1 / 12;
        var maxLP = 50;

        switch (gCrime) {
            case "사기":
                maxLP = 10;
                break;
            case "컴퓨터등사용사기":
                maxLP = 10;
                break;
            case "준사기":
                maxLP = 10;
                break;
            case "상습사기":
                maxLP = 15;
                break;
            case "특경법사기":
                if (gDamage === "4유형" || gDamage == "5유형") {
                    minLP = 5;
                } else if (gDamage === "3유형") {
                    minLP = 3;
                }
                break;
            default:
                break;
        }

        // 34조 2항 가중
        if(gRadioIns[1] === true)
            maxLP = maxLP * 1.5;

        // 누범 가중
        if(gRepeater === true)
            maxLP = maxLP * 2;


if(minLP < 1/12)
            minLP = 1 / 12;
        if(maxLP > 50)
            maxLP = 50;

        // minLP, maxLP : 처단형의 하한과 상한


        // 양형기준 적용

        var guideT = [
            [
                [1/12, 1, 0.5, 1.5, 1, 2.5],
                [10/12, 2.5, 1, 4, 2.5, 6],
                [1.5, 4, 3, 6, 4, 7],
                [3, 6, 5, 8, 6, 9],
                [5, 9, 6, 10, 8, 13]    ],
            [
                [1, 2.5, 1.5, 3, 2.5, 4],
                [1.5, 3, 2, 5, 4, 7],
                [2, 5, 4, 7, 6, 9],
                [4, 7, 6, 9, 8, 11],
                [6, 10, 8, 13, 11, 50]  ]
        ];



        var guide;

        if(gRadioType[0] === true && gRadioType[1] === false) {
            guide = guideT[0];
        } else if(gRadioType[0] === false && gRadioType[1] === true) {
            guide = guideT[1];
        } else {
            alert("사기유형 선택에 오류가 있습니다");
        }




        // 권고영역 결정
        var region = "basic";

        var v0 = gNumActGoodS - gNumActBadS;
        var v1 = gNumActorGoodG - gNumActorBadS;
        if (v0 === 0 && v1 === 0) {
            // 남은 특별양형인자가 없는 경우

        } else if (v0 === 0 || v1 === 0 || (v0 * v1) > 0) {
            // 남은 특별양형인자에 가중인자와 감경인자가 섞여 있지 않을 경우

            if (v0 === 0) {
                // 행위자 인자만 남은 경우
                if (v1 > 0) {
                    region = "better";
                    if (v1 >= 2)
                        region = "best";
                } else {
                    region = "worse";
                    if (Math.abs(v1) >= 2)
                        region = "worst";
                }
            }

            if (v1 === 0) {
                // 행위 인자만 남은 경우
                if (v0 > 0) {
                    region = "better";
                    if (v0 >= 2)
                        region = "best";
                } else {
                    region = "worse";
                    if (Math.abs(v0) >= 2)
                        region = "worst";
                }
            }

            if (v0 > 0 && v1 > 0) {
                region = "better";
                if (v0 + v1 >= 2)
                    region = "best";
            }

            if (v0 < 0 && v1 < 0) {
                region = "worse";
                if (Math.abs(v0 + v1) >= 2)
                    region = "worst";
            }

        } else {
            // 남은 특별양형인자에 가중인자와 감경인자가 섞여 있을 경우

            if (v0 > 0 && v0 >= Math.abs(v1)) {
                region = "better";
                if (v0 - Math.abs(v1) >= 2)
                    region = "best";
            }

            if (v1 > 0 && Math.abs(v0) >= v1) {
                region = "worse";
                if (Math.abs(v0) - v1 >= 2)
                    region = "worst";
            }

        }



        var ind0 = 0;
        switch (gDamage) {
            case "1유형":
                ind0 = 0;
                break;
            case "2유형":
                ind0 = 1;
                break;
            case "3유형":
                ind0 = 2;
                break;
            case "4유형":
                ind0 = 3;
                break;
            case "5유형":
                ind0 = 4;
                break;
            default:
                break;
        }

        var ind1 = 0;
        switch (region) {
            case "basic":
                ind1 = 2;
                break;
            case "better":
                ind1 = 0;
                break;
            case "best":
                ind1 = 0;
                break;
            case "worse":
                ind1 = 4;
                break;
            case "worst":
                ind1 = 4;
                break;
            default:
                break;
        }

        var minSent = guide[ind0][ind1];
        var maxSent = guide[ind0][ind1 + 1];

        if (region === "best")
            minSent = minSent / 2;

        if (region === "worst")
            maxSent = maxSent * 1.5;

        if (minSent < 1/12)
            minSent = 1/12;

        if (maxSent > 50)
            maxSent = 50;

        // minSent, maxSent : 양형기준의 하한과 상한


        // 양형기준은 처단형의 범위 안에서 유의미
        gMinFinal = minSent;
        gMaxFinal = maxSent;

        if (maxSent > maxLP)
            gMaxFinal = maxLP;

        if (minSent < minLP)
            gMinFinal = minLP;


        console.log("범죄 종류   ", gCrime);
        console.log("피해액 유형   ", gDamage);
        
        if(gRadioIns[0] === true)
            console.log("교사 해당");
        if(gRadioIns[1] === true)
            console.log("특수교사 해당");
        if(gRadioIns[2] === true)
            console.log("방조 해당");
        if(gRadioIns[3] === true)
            console.log("특수방조 해당");

        if(gRepeater === true)
            console.log("누범에 해당");

        if(gRadioType[0] === true)
            console.log("일반 사기임");
        if(gRadioType[1] === true)
            console.log("조직적 사기임");



        // 집행유예 검토

        if( gNumSusGoodS >= 2 && gNumSusBadS === 0 
        && gNumSusGoodG ===0 && gNumSusBadG === 0) {
            gSuspend = "집행유예";
        } else if( gNumSusBadS >= 2 && gNumSusGoodS === 0 
        && gNumSusGoodG ===0 && gNumSusBadG === 0) {
            gSuspend = "실형";
        } else if ( gNumSusGoodS - gNumSusBadS >= 2) {
            if ( gNumSusBadG - gNumSusGoodG > gNumSusGoodS - gNumSusBadS ) {
                gSuspend = "선택가능";
            } else {
                gSuspend = "집행유예";
            }
        } else if ( gNumSusBadS - gNumSusGoodS >= 2) {
            if ( gNumSusGoodG - gNumSusBadG > gNumSusBadS - gNumSusGoodS ) {
                gSuspend = "선택가능";
            } else {
                gSuspend = "실형";
            }
        } else {
            gSuspend = "선택가능";
        }


        console.log("처단형 하한 = ", minLP, "  처단형 상한 = ", maxLP);
        console.log("양형기준 하한 = ", minSent, "  양형기준 상한 = ", maxSent);
        console.log("선고형 하한 = ", gMinFinal, "  선고형 상한 = ", gMaxFinal); 
        console.log("집행유예여부 = ", gSuspend);




}


function easyYear(v) {
    v = v * 12;
    var year = Math.floor(v/12);
    var month = v%12;

    var easy = "";
    if(year != 0) {
        easy += String(year) + "년";
    }
    if(month != 0) {
        easy += String(month) + "월";
    }

    return easy;
}



function selectCrime() {
    gCrime = document.getElementById("pickCrime").value;
}

function selectDamage() {
    gDamage = document.getElementById("damage").value;
}

function checkRepeater() {
    gRepeater = document.getElementById("repeater").checked;
}


function radioIns(ind) {
    var x = "rIns";
    y = x.concat(String(ind));

    var s = document.getElementById(y).checked;
    if(s === true && s === gRadioIns[ind]) 
        document.getElementById(y).checked = false;

    for(i=0; i<gRadioIns.length; i++) {
        y = x.concat(String(i));
        gRadioIns[i] = document.getElementById(y).checked;
    }
}

function radioType(ind) {
    var x = "rType";
    y = x.concat(String(ind));

    var s = document.getElementById(y).checked;
    if(s === true && s === gRadioType[ind]) 
        document.getElementById(y).checked = false;

    
    for(i=0; i<gRadioType.length; i++) {
        y = x.concat(String(i));
        gRadioType[i] = document.getElementById(y).checked;
    }
    
    if(gRadioType[0] === true)
        loadFactor("일반 사기");
    
    if(gRadioType[1] === true)
        loadFactor("조직적 사기");

    if(gRadioType[0] === false && gRadioType[1] === false) {
        document.getElementById("listFactor").innerHTML = "";
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("resultNote").style.display = "none";
    } else {
        document.getElementById("submitButton").style.display = "block";
    }


}


function loadFactor(fraudType) {

    var xmlhttp = new XMLHttpRequest();
    var url = "/wp-content/uploads/phpTools/fraudFactor.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var arr = JSON.parse(this.responseText);

            manageFactor(arr, fraudType);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
    xmlhttp.setRequestHeader('cache-control', 'max-age=0');
    xmlhttp.setRequestHeader('expires', '0');
    xmlhttp.setRequestHeader('pragma', 'no-cache');    
    xmlhttp.send();
}

function manageFactor(arr, fraudType) {

    var xmlhttp = new XMLHttpRequest();
    var url = "/wp-content/uploads/phpTools/infoTips.json";


    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tips = JSON.parse(this.responseText);
            

            gTag0 = []; gTag1 = [];
            gNumActGoodS = gNumActGoodG = gNumActorGoodS = gNumActorGoodG = 0;
            gNumActBadS = gNumActBadG = gNumActorBadS = gNumActorBadG = 0;
            gNumSusGoodS = gNumSusGoodG = gNumSusBadS = gNumSusBadG = 0;

            ggMinFinal = 0; 
            ggMaxFinal = 0;
            gSuspend = "";

            for(i=0; i<arr.length;i++) {
                if(arr[i].type === fraudType){
                    arr = arr[i].factor;

                    var len = arr.length;
                    var out="";
                    

                    out += '<div class="w3-padding-16"><span class="w3-tag w3-blue w3-padding-large" style="transform:rotate(-5deg)">해당 항목을 모두 체크하세요</span></div>';

                    out += '<table class="w3-table w3-striped">';

                    for(j=0; j<len; j++){
                        gTag0.push(arr[j].tag[0]);
                        gTag1.push(arr[j].tag[1]);
                        
                        out += '<tr>';
                        out += '<td class="w3-padding-16"><input type="checkbox" onclick="pickFactor(this)" id="' + String(j) + '"> ' + arr[j].word + ' ' + ( arr[j].tip >= 0 ? '<button data-tippy-content="' + tips[arr[j].tip].cont + '"class="TIPPY w3-white w3-round-large"><b>&nbsp;i&nbsp;</b></button>' : '' )+ '</td>';
                        out += '</tr>';
                    }
                    
                    out += '</table>';

                    document.getElementById("listFactor").innerHTML = out;
                    tippy('.TIPPY');

                    break;
                }
            }


        }
    };




    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
    xmlhttp.setRequestHeader('cache-control', 'max-age=0');
    xmlhttp.setRequestHeader('expires', '0');
    xmlhttp.setRequestHeader('pragma', 'no-cache');
    xmlhttp.send();

}


function pickFactor(factor) {

    var tag0 = gTag0[factor.id];
    var tag1 = gTag1[factor.id];

    if(factor.checked === false) {

        switch(tag0) {
            case "actGoodS":
                gNumActGoodS--;
            break;
            case "actGoodG":
                gNumActGoodG--;
            break;  
            case "actorGoodS":
                gNumActorGoodS--;
            break;  
            case "actorGoodG":
                gNumActorGoodG--;
            break;
            case "actBadS":
                gNumActBadS--;
            break;
            case "actBadG":
                gNumActBadG--;
            break;  
            case "actorBadS":
                gNumActorBadS--;
            break;  
            case "actorBadG":
                gNumActorBadG--;
            break;    
            default:
            break;
        }

        switch(tag1) {
            case "susGoodS":
                gNumSusGoodS--;
            break;
            case "susGoodG":
                gNumSusGoodG--;
            break;  
            case "susBadS":
                gNumSusBadS--;
            break;  
            case "susBadG":
                gNumSusBadG--;
            break;    
            default:
            break;
        }

    } else {

        switch(tag0) {
            case "actGoodS":
                gNumActGoodS++;
            break;
            case "actGoodG":
                gNumActGoodG++;
            break;  
            case "actorGoodS":
                gNumActorGoodS++;
            break;  
            case "actorGoodG":
                gNumActorGoodG++;
            break;
            case "actBadS":
                gNumActBadS++;
            break;
            case "actBadG":
                gNumActBadG++;
            break;  
            case "actorBadS":
                gNumActorBadS++;
            break;  
            case "actorBadG":
                gNumActorBadG++;
            break;    
            default:
            break;
        }

        switch(tag1) {
            case "susGoodS":
                gNumSusGoodS++;
            break;
            case "susGoodG":
                gNumSusGoodG++;
            break;  
            case "susBadS":
                gNumSusBadS++;
            break;  
            case "susBadG":
                gNumSusBadG++;
            break;    
            default:
            break;
        }
    }

/*
    console.log("gNumActGoodS", gNumActGoodS);
    console.log("gNumActGoodG", gNumActGoodG);
    console.log("gNumActorGoodS", gNumActorGoodS);
    console.log("gNumActorGoodG", gNumActorGoodG);
    console.log("gNumActBadS", gNumActBadS);
    console.log("gNumActBadG", gNumActBadG);
    console.log("gNumActorBadS", gNumActorBadS);
    console.log("gNumActorBadG", gNumActorBadG);
    console.log("gNumSusGoodS", gNumSusGoodS);
    console.log("gNumSusGoodG", gNumSusGoodG);
    console.log("gNumSusBadS", gNumSusBadS);
    console.log("gNumSusBadG", gNumSusBadG);
*/
}



</script>


</body>
</html>