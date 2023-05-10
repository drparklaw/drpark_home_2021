import React from 'react';

const recent_cases = [
    {
        id: 1,
        kind: '[민사집행]',
        date: '대법원 2022.3.17. 선고 2019다226975 판결',
        tag: '가압류취소·집행정지·국가배상',
        content: '가압류취소에 대한 즉시항고가 받아들여져 잘못된 가압류취소를 취소하고 다시 가압류등기가 촉탁되었는데, 채권자가 따로 집행정지를 신청하지 않아 그 사이 부동산이 제3자에게 이전됨으로써 위 촉탁이 각하되었더라도 처음의 잘못된 가압류취소를 이유로 국가배상을 구할 수는 없다.'
    },
    {
        id: 2,
        kind: '[형사]',
        date: '대법원 2022.5.13. 선고 2020도15642 판결',
        tag: '명예훼손·이혼',
        content: '"마을제사에 남편과 이혼한 사람이 참석해서 안좋다" 또는 "이혼했다는 사람이 왜 마을제사에 왔는지 모르겠다"고 말한 것만으로는, 마을제사 참여에 관한 의견표현에 지나지 않아 명예훼손죄에서 요구하는 사실의 적시에 해당하지 않는다.'
    },
    {
        id: 3,
        kind: '[행정]',
        date: '대법원 2022.5.13. 선고 2018두50147 판결',
        tag: '재산세·표준지·공시지가',
        content: '표준지의 소유자가 표준지에 관한 재산세부과처분의 취소를 구하면서 재산세 과세표준 산정의 기초가 되는 표준지공시지가의 위법성을 다투는 것은 원칙적으로 허용되지 않는다. 표준지공시지가를 다투기 위해서는 국토교통부장관에게 이의신청하거나 국토교통부장관을 상대로 공시지가결정의 취소를 구하는 행정심판이나 행정소송을 제기해야 한다.'
    },
    {
        id: 4,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2017다266177 판결',
        tag: '가등기담보·귀속정산·취득세',
        content: '가등기담보권자는 귀속정산 과정에서 담보목적물의 교환가치를 파악하기 위하여 쓴 감정평가비용 등을 실행비용으로서 청산금에서 공제할 수 있을 뿐, 청산의 결과로서 본등기를 마치기 위해 지출한 절차비용과 취득세 등은 스스로 부담해야 한다.'
    },
    {
        id: 5,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2019다292736,292743 판결',
        tag: '채무불이행·손해배상액의 예정·해제·해지·실효',
        content: '채무불이행으로 인한 전보배상에 관하여 손해배상액을 예정한 경우 채권자가 채무불이행을 이유로 계약을 해제하거나 해지하더라도 원칙적으로 손해배상액의 예정은 실효되지 않는다. 예외적으로 손해배상액의 예정이 계약의 유지를 전제로 하고 있는 경우 계약의 해제·해지와 함께 실효될 수 있을 뿐이다.'
    },
    {
        id: 6,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다240021 판결',
        tag: '이혼·감독의무·미성년자·비양육친',
        content: '이혼으로 인하여 부모 중 1명이 친권자 및 양육자로 지정된 경우 그렇지 않은 부모(비양육친)가 미성년자의 부모라는 사정만으로는 원칙적으로 미성년 자녀에 대한 보호·감독의무를 부담하지 않는다.'
    },
    {
        id: 7,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다254228,254235 판결',
        tag: '지상물매수청구권·임대인',
        content: '국유 토지의 관리를 위탁받은 회사와 사용·수익계약을 체결하여 그 토지 위에 건물을 신축했더라도 계약기간 만료 후 토지 소유자가 아닌 위 회사를 상대로 지상물매수청구권을 행사할 수는 없다.'
    },
    {
        id: 8,
        kind: '[민법]',
        date: '대법원 2022.4.14. 선고 2020다268760 판결',
        tag: '지연손해금·시효중단·이행기의 정함이 없는 채무',
        content: '금전채무의 지연손해금채무는 이행기의 정함이 없는 채무이므로 판결이 확정된 채권자가 시효중단을 위한 신소를 제기하면서 확정판결에 따른 원금과 함께 원금에 대한 확정 지연손해금 및 이에 대한 지연손해금을 청구하는 경우, 채무자는 확정 지연손해금에 대하여도 이행청구를 받은 다음 날부터 지연손해금을 별도로 지급해야 한다.'
    },
    {
        id: 9,
        kind: '[민사집행]',
        date: '대법원 2022.6.9. 선고 2021다270494 판결',
        tag: '지역주택조합·분담금·압류',
        content: '지역주택조합이 조합원의 분담금을 신탁회사 명의 계좌로만 납부하도록 하여 그 변제 수령권한이 없는 경우 조합원은 조합의 분담금 직접 지급 청구를 거절할 수 있음은 물론 분담금 채권을 압류한 조합의 채권자에 대하여도 대항할 수 있다.'
    },
    {
        id: 10,
        kind: '[상법]',
        date: '대법원 2022.4.19.자 2022그501 결정',
        tag: '소수주주·주주총회·대표이사',
        content: '소수주주가 주주총회소집허가 신청을 하는 경우 주주총회 결의사항이 아닌 것을 목적으로 할 수 없다. 주주총회는 상법 또는 정관이 정한 사항에 한하여 결의할 수 있고, 대표이사는 정관에 정함이 없는 한 이사회 결의로 선임되므로, 정관에서 ‘대표이사의 선임 및 해임’을 주주총회 결의사항으로 규정하지 않은 때에는 소수주주가 이를 목적으로 주주총회소집허가를 신청할 수 없다.'
    },
    {
        id: 11,
        kind: '[민사소송]',
        date: '대법원 2022.4.28. 선고 2019다200843 판결',
        tag: '변제자대위·구상권·보험자대위',
        content: '채무를 변제할 이익이 있는 자가 채무를 대위변제한 경우에 갖게 되는 구상권과 변제자대위권은 내용이 전혀 다른 별개의 권리이며, 이는 상법상 인정되는 보험자대위권에서도 마찬가지이다.'
    },
    {
        id: 12,
        kind: '[상법]',
        date: '대법원 2022.4.28. 선고 2019다272053 판결',
        tag: '보조적 상행위·기부채납·상사소멸시효',
        content: '지방자치단체와 상인인 기부자 사이에 체결된 기부채납 약정은 다른 사정이 없는 한 상인이 영업을 위하여 한 보조적 상행위에 해당하므로, 그러한 기부채납 약정에 근거한 채권에는 5년의 상사 소멸시효기간이 적용된다.'
    },
    {
        id: 13,
        kind: '[상법]',
        date: '대법원 2022.4.28. 선고 2021다305659 판결',
        tag: '상호속용·영업양도·채무인수',
        content: '영업양도에서 양도인의 채권자가 채무인수 사실이 없음을 알지 못한 경우에는 다른 사정이 없는 한 상호속용에 따른 양수인의 변제책임이 발생하고, 이후 채권자가 채무인수 사실이 없음을 알게 되더라도 이미 발생한 양수인의 변제책임이 소멸하는 것은 아니다.'
    },
    {
        id: 14,
        kind: '[민사집행]',
        date: '대법원 2022.4.28.자 2021마7088 결정',
        tag: '가압류취소·항고',
        content: '가압류취소결정에 따른 집행취소에 의해 가압류등기가 이미 말소된 경우라도, 항고법원이 위 가압류취소결정을 취소하고 가압류결정을 회복하여 집행까지 하는 방법이 존재하므로(민사집행법 298조) 채권자가 항고를 통해 가압류취소결정을 취소하는 항고의 이익이 없다고 단정할 수 없다.'
    },
    {
        id: 15,
        kind: '[민사소송]',
        date: '대법원 2022.4.28. 선고 2022다200768 판결',
        tag: '소송촉진법·소송물·법정이율',
        content: '생명 또는 신체에 대한 불법행위로 인하여 입게 된 적극적 손해와 소극적 손해 및 정신적 손해는 각 소송물을 달리하므로 소송촉진법에 따른 높은 법정이율을 적용함에 있어 그 손해배상의무의 존부나 범위에 관하여 항쟁함이 타당한지 여부는 각 손해마다 따로 판단하여야 한다.'
    },
    {
        id: 16,
        kind: '[형사소송]',
        date: '대법원 2022.4.28. 선고 2021도16719,2021전도165,2021보도54 판결',
        tag: '양형부당·상고이유',
        content: '10년 이상의 징역이나 금고가 선고된 사건에서 형의 양정이 심히 부당하다고 인정할 현저한 사유가 있는 때를 상고이유로 하는 형사소송법 383조 4호 후단은 피고인의 이익을 위한 것이며, 검사는 피고인에게 불리하게 원심의 양형이 가볍다거나 원심이 양형의 전제사실을 인정하는 데 자유심증주의의 한계를 벗어난 잘못이 있다는 사유를 상고이유로 주장할 수 없다.'
    },
    {
        id: 17,
        kind: '[형법]',
        date: '대법원 2022.4.28. 선고 2022도1013 판결',
        tag: '운전자 폭행·원동기장치자전거·특정범죄가중법',
        content: '운행 중인 자동차 운전자에 대한 폭행 등은 가중처벌한다는 특정범죄가중법 규정의 자동차는 도로교통법상의 자동차를 의미하고 도로교통법상 원동기장치자전거는 이에 포함되지 않는다.'
    },
    {
        id: 18,
        kind: '[민사소송]',
        date: '대법원 2022.6.21.자 2021그753 결정',
        tag: '지급명령·반대급부·특정물인도',
        content: '반대급부의 이행과 동시에 금전 등 대체물이나 일정한 수량의 유가증권의 지급을 명하는 지급명령도 허용된다. 이때 반대급부는 특정물인도를 그  내용으로 삼을 수도 있고, 반대급부를 이행하여야 하는 자가 지급명령의 신청인에 한정되는 것도 아니다.'
    },
    {
        id: 19,
        kind: '[민사소송]',
        date: '대법원 2022.5.3.자 2021마6868 결정',
        tag: '현영업소·채권추심·영업에 관한 채무',
        content: '영업에 관한 채무의 변제는 채권자의 현영업소에서 하여야 한다는 민법 규정에서, 현영업소는 변제 당시를 기준으로 채권자의 주된 영업소(본점)에 한정되는 것이 아니라 채권추심 업무를 실제로 담당하는 영업소까지 포함된다. 따라서 영업에 관한 채무의 이행을 구하는 소는 제소 당시 채권추심 업무를 실제로 담당하는 채권자의 영업소 소재지 법원에 제기할 수 있다.'
    },
    {
        id: 20,
        kind: '[민법]',
        date: '대법원 2022.5.26. 선고 2019다213344 판결',
        tag: '의사능력·법률행위',
        content: '의사능력 유무는 구체적인 법률행위와 관련하여 개별적으로 판단해야 하고, 특히 어떤 법률행위가 일상적인 의미만을 이해해서는 알기 어려운 특별한 법률적 의미나 효과가 부여되어 있는 경우 의사능력이 인정되기 위해서는 그 행위의 일상적인 의미뿐만 아니라 법률적인 의미나 효과에 대해서도 이해할 수 있어야 한다.'
    },
    {
        id: 21,
        kind: '[민법]',
        date: '대법원 2022.5.26. 선고 2020다206625 판결',
        tag: '시효중단·최고·확장',
        content: '소장에서 청구의 대상으로 삼은 채권 중 일부만을 청구하면서 소송의 진행경과에 따라 장차 청구금액을 확장할 뜻을 표시하였더라도 그 후 채권의 특정 부분을 청구범위에서 명시적으로 제외하였다면, 그 부분에 대하여는 애초부터 소제기가 없었던 것과 마찬가지이므로 재판상 청구로 인한 시효중단의 효력이 발생하지 않는다. 이 경우 당해 소송이 계속 중인 동안에는 나머지 부분에 대하여 권리를 행사하겠다는 의사가 표명되어 최고에 의해 권리를 행사하고 있는 상태가 지속되고 있는 것이고, 채권자는 당해 소송이 종료된 때부터 6월 내에 재판상 청구·압류·가압류·가처분 등을 함으로써 나머지 부분에 대한 소멸시효를 중단시킬 수 있다.'
    },
    {
        id: 22,
        kind: '[민법]',
        date: '대법원 2022.5.26. 선고 2020다215124 판결',
        tag: '정수기·선택권·정신적 손해',
        content: '甲이 乙회사가 제조한 얼음정수기를 임대차 또는 매매의 방법으로 제공받아 사용하고 乙회사는 이를 정기적으로 점검·관리하는 내용의 계약을 체결하였는데, 그 후 얼음정수기에서 중금속인 니켈이 검출된 사안에서, 乙회사는 얼음정수기에서 니켈도금이 박리되고 니켈성분이 검출된 사실을 甲에게 고지할 의무가 있었는데도, 이를 고지하지 않음으로써 甲이 건강과 밀접한 관련이 있는 마실 물에 관하여 선택권을 행사할 기회를 상실하였으므로, 이러한 선택권의 침해로 甲의 정신적 손해를 인정할 수 있다.'
    },
    {
        id: 23,
        kind: '[민법]',
        date: '대법원 2022.5.26. 선고 2022다211416 판결',
        tag: '조합채무·구상권·연대채무·공동면책',
        content: '어느 연대채무자가 변제 기타 자기의 출재로 공동면책이 된 때에는 다른 연대채무자의 부담부분에 대하여 구상권을 행사할 수 있으므로 모든 조합원에게 합유적으로 귀속되는 조합채무에 있어서, 조합원 중 1인이 조합채무를 면책시킨 경우 그 조합원은 다른 조합원에 대하여 구상권을 행사할 수 있다. 이러한 구상권은 조합의 해산이나 청산 시에 손실을 부담하는 것과 별개의 문제이므로 반드시 잔여재산분배 절차에서 행사해야 하는 것은 아니다.'
    },
    {
        id: 24,
        kind: '[형사소송]',
        date: '대법원 2022.5.26. 선고 2017도11582 판결',
        tag: '사후심적 속심',
        content: '형사소송법상 항소심은 속심을 기반으로 하되 사후심의 요소도 상당 부분 들어 있는 이른바 사후심적 속심의 성격을 가지므로, 항소심에서 1심판결의 당부를 판단할 때에는 이러한 심급구조의 특성을 고려해야 한다. 항소심이 심리과정에서 심증의 형성에 영향을 미칠 만한 객관적 사유가 새로 드러난 것이 없는데도 1심판단을 재평가하여 사후심적으로 판단하여 뒤집고자 할 때에는, 1심의 증거가치 판단이 명백히 잘못되었다거나 사실인정에 이르는 논증이 논리와 경험의 법칙에 어긋나는 등 그 판단을 그대로 유지하는 것이 현저히 부당하다고 볼 만한 합리적인 사정이 있어야 하고, 그러한 예외적 사정도 없이 1심의 사실인정에 관한 판단을 함부로 뒤집어서는 안 된다.'
    },
    {
        id: 25,
        kind: '[형사소송]',
        date: '대법원 2022.5.26. 선고 2021도2488 판결',
        tag: '고소권자·재산관리인·법정대리인',
        content: '법원이 선임한 부재자 재산관리인이 그 관리대상인 부재자의 재산에 대한 범죄행위에 관하여 법원으로부터 고소권 행사에 관한 허가를 얻은 경우 부재자 재산관리인은 형사소송법에서 정한 법정대리인으로서 적법한 고소권자에 해당한다.'
    },
    {
        id: 26,
        kind: '[상법]',
        date: '대법원 2022.6.9. 선고 2018다228462,2018다228479 판결',
        tag: '주주·무효확인·영업양도',
        content: '주주는 직접 제3자와의 거래관계에 개입하여 회사가 체결한 계약의 무효 확인을 구할 이익이 없다. 이는 회사가 영업의 전부 또는 중요한 일부를 양도하는 계약을 체결하는 경우에도 마찬가지이다.'
    },
    {
        id: 27,
        kind: '[민법]',
        date: '대법원 2022.6.9. 선고 2020다208997 판결',
        tag: '명의신탁·횡령죄·불법행위',
        content: '명의수탁자가 3자간 등기명의신탁에 따라 매도인으로부터 소유권이전등기를 넘겨받은 부동산을 자기 마음대로 처분한 경우, 형사상 횡령죄로 처벌되는지와 관계없이 명의수탁자는 명의신탁자에 대하여 민사상 불법행위책임을 부담한다.'
    },
    {
        id: 28,
        kind: '[민법]',
        date: '대법원 2022.6.16. 선고 2017다289538 판결',
        tag: '불법행위·후유증·지연손해금',
        content: '불법행위로 상해를 입었지만 후유증 등으로 인하여 불법행위 당시에는 전혀 예상할 수 없었던 후발손해가 새로이 발생한 경우와 같이, 사회통념상 후발손해가 판명된 때에 현실적으로 손해가 발생한 것으로 볼 수 있는 경우에는 후발손해 판명 시점에 불법행위로 인한 손해배상채권이 성립하고, 지연손해금 역시 그때부터 발생한다.'
    },
    {
        id: 29,
        kind: '[민법]',
        date: '대법원 2022.6.16. 선고 2018다301350 판결',
        tag: '유치권·소멸청구·불가분성·선관의무',
        content: '하나의 채권을 피담보채권으로 하여 여러 필지의 토지에 대하여 유치권을 취득한 유치권자가 그중 일부 필지의 토지에 대하여 선량한 관리자의 주의의무를 위반하였다면 위반행위가 있었던 필지의 토지에 대하여만 유치권 소멸청구가 가능하다.'
    },
    {
        id: 30,
        kind: '[민법]',
        date: '대법원 2022.7.28. 선고 2020다46663 판결',
        tag: '최고·소멸시효중단·승인·양도통지',
        content: '채권양수인이 보증인을 상대로 잔여채무의 이행을 구하자 보증인들이 소멸시효 항변한 경우, 양수인이 양도인의 채권양도통지가 최고에 해당하고 그로부터 6개월 내에 주채무자의 승인이 있었으므로 소멸시효가 중단되었다고 재항변하는 것은 이유있다.'
    },
    {
        id: 31,
        kind: '[민법]',
        date: '대법원 2022.6.30. 선고 2018다268576 판결',
        tag: '양도소득세·국세·상속·부채',
        content: '피상속인이 내지 않은 양도소득세와 같은 국세는 상속인이 상속으로 받은 재산의 한도에서 납부해야 하는데, 상속으로 받은 재산은 상속받은 자산총액에서 상속받은 부채총액과 상속으로 인하여 부과되거나 납부할 상속세를 공제하여 계산하며, 피상속인으로부터 승계되는 국세는 부채총액에 포함되지 않는다(상속으로 받은 재산 = 자산총액 - 부채총액 - 상속세).'
    },
    {
        id: 32,
        kind: '[민법]',
        date: '대법원 2022.6.30. 선고 2020다209815 판결',
        tag: '점유자·회복자·비용상환청구권',
        content: '점유자가 점유물 반환 이외의 원인으로 물건의 점유자 지위를 잃어 소유자가 그를 상대로 물권적 청구권을 행사할 수 없게 되었다면, 그들은 더 이상 점유자와 회복자의 관계에 있지 않으므로 점유자는 그러한 관계에 근거한 비용상환청구권을 행사할 수 없다. 다만, 사무관리에 따른 상환을 청구하거나 부당이득반환을 청구할 수 있다.'
    },
    {
        id: 33,
        kind: '[민법]',
        date: '대법원 2022.7.28. 선고 2017다245330 판결',
        tag: '유증·사인증여·철회',
        content: '사인증여에 있어서 유증의 철회와 마찬가지로 증여자는 언제든지 증여의 전부나 일부를 철회할 수 있다.'
    },
    {
        id: 34,
        kind: '[민사소송]',
        date: '대법원 2023. 4. 13. 선고 2017다219232 판결',
        tag: '재판관할·준거법·소비자계약·강행규정·개인정보보호·구글',
        content: '구글과 체결한 구글서비스 이용계약이 국제사법의 소비자계약에 해당하는 경우 구글을 피고로 한국에 소를 제기한 것은 미국법원에 관한 전속적 재판관할합의에도 불구하고 적법함은 물론, 미국법에 따른 준거법합의가 있더라도 개인정보보호에 관한 강행규정인 한국의 정보통신망법을 적용할 수 있다.'
    },
    {
        id: 35,
        kind: '[민사소송]',
        date: '대법원 2023. 4. 13. 선고 2022다293272 판결',
        tag: '가집행·항소심·소의 교환적 변경·소취하·가지급물의 반환',
        content: '제1심에서 가집행선고부 승소판결을 받고 그에 기하여 판결원리금을 지급받았다가 항소심에 이르러 당초의 소가 교환적으로 변경되어 취하된 것으로 되는 경우에는 항소심 절차에서 곧바로 가지급물의 반환 등을 구할 수 있다.'
    },
    {
        id: 36,
        kind: '[민사소송]',
        date: '대법원 2023. 2. 23. 선고 2022다207547 판결',
        tag: '확인의 소·징계·졸업',
        content: '갑이 을 주식회사가 운영하는 고등학교에서 재학 중 정학 2일의 징계를 받은 뒤 이에 불복하여 을 회사를 상대로 징계 무효 확인을 구하는 소를 제기하였다가 소송 중 학교를 졸업한 사안에서, 징계 자체는 과거의 법률관계라고 하더라도 징계 무효 확인을 구할 법률상 이익이 인정된다.'
    },
    {
        id: 37,
        kind: '[형사소송]',
        date: '대법원 2023. 4. 27. 선고 2023도2102 판결',
        tag: '검사작성 피신조서·내용인정·증거능력',
        content: '검사가 작성한 피의자신문조서는 공판준비·공판기일에 그 피의자였던 피고인 또는 변호인이 그 내용을 인정할 때에 한하여 증거능력이 있는데, 내용을 인정할 때란 진술한대로 기재되어 있다는 의미가 아니라 진술한 내용이 실제 사실에 부합한다는 것을 의미한다. 따라서 피고인이 공소사실을 부인하면 검사가 작성한 피의자신문조서 중 공소사실을 인정하는 취지의 진술부분은 그 내용을 인정하지 않은 것이다.'
    },
    {
        id: 38,
        kind: '[민법]',
        date: '대법원 2023. 4. 27. 선고 2020다292626 판결',
        tag: '공동상속·법정상속분·구체적 상속분·특별수익·상속회복청구·상속재산분할',
        content: '공동상속인들 사이에서 상속재산분할이 마쳐지지 않았음에도 특정 공동상속인에 대하여 특별수익을 고려하면 그의 구체적 상속분이 없다는 이유를 들어 그 공동상속인에게는 상속재산에 관하여 법정상속분에 따른 권리승계가 아예 이루어지지 않았다고 하거나, 부동산인 상속재산에 관하여 법정상속분에 따라 마쳐진 상속을 원인으로 한 소유권이전등기가 원인무효라는 식의 상속회복청구는 인정될 수 없다.'
    },
    {
        id: 39,
        kind: '[민사소송]',
        date: '대법원 2023. 3. 13. 선고 2022다286786 판결',
        tag: '장래이행의 소·이행거부·이행기·무자력·강제집행',
        content: '장래이행의 소는 이행기가 도래하더라도 채무자가 임의이행을 거부할 것이 명백히 예상되는 상황과 같이 예외적으로 채권자로 하여금 이행기에 이르러 소를 제기하게 하는 것보다 미리 집행권원을 확보하게 함으로써 이행기가 도래하면 곧바로 강제집행을 할 필요가 인정되는 경우를 대비하여 있는 것이지, 채무자의 무자력에 따른 강제집행의 곤란에 대비하기 위해 마련된 것이 아니다.'
    },
    {
        id: 40,
        kind: '[형법]',
        date: '대법원 2023. 3. 9. 선고 2022도16120 판결',
        tag: '실화죄·과실·경합',
        content: '실화죄에 있어서 공동의 과실이 경합되어 화재가 발생한 경우 적어도 각 과실이 화재의 발생에 대하여 하나의 조건이 된 이상은 그 공동적 원인을 제공한 사람들은 각자 실화죄의 책임을 면할 수 없다.'
    }

]


function Cases() {

    return (
        <ul class="MethodWrapper">
            {recent_cases.slice(0).reverse().map(cases => (
                <li>{cases.kind} {cases.date}, <i>{cases.tag}</i> <p>{cases.content}</p><hr color="#f0f0f0"/></li>
            ))}
        </ul>
    );
}

export default Cases;