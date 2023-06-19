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
    },
    {
        id: 41,
        kind: '[민법]',
        date: '대법원 2023. 5. 11. 선고 2018다248626 전원합의체 판결',
        tag: '공동상속인·제사주재자·직계비속·최근친의 연장자·조리',
        content: '공동상속인들 사이에 협의가 이루어지지 않는 경우에는 제사주재자의 지위를 인정할 수 없는 특별한 사정이 있지 않는 한 피상속인의 직계비속 중 남녀, 적서를 불문하고 최근친의 연장자가 제사주재자로 우선한다고 보는 것이 가장 조리에 부합한다.'
    },
    {
        id: 42,
        kind: '[노동]',
        date: '대법원 2023. 5. 11. 선고 2017다35588, 2017다35595(병합) 전원합의체 판결',
        tag: '취업규칙·불이익변경·노동조합·근로자·동의권 남용',
        content: '사용자가 취업규칙을 근로자에게 불리하게 변경하면서 근로자의 과반수로 조직된 노동조합 내지 근로자의 집단적 의사결정방법에 따른 동의를 받지 못한 경우, 노동조합이나 근로자들이 집단적 동의권을 남용하였다고 볼 만한 사정이 없는 한 해당 취업규칙의 작성 또는 변경에 사회통념상 합리성이 있다는 이유만으로 그 유효성을 인정할 수는 없다.'
    },
    {
        id: 43,
        kind: '[형법]',
        date: '대법원 2023. 3. 16. 선고 2021도16482 판결',
        tag: '업무방해죄·의료기관·진료행위·의료인·반사회성',
        content: '의료인이나 의료법인이 아닌 자가 의료기관을 개설하여 운영하는 행위는 업무방해죄의 보호대상이 되는 업무에 해당하지 않지만, 무자격자에 의해 개설된 의료기관에 고용된 의료인이 환자를 진료하는 행위 또한 당연히 반사회성을 띠는 행위라고 볼 수는 없다.'
    },
    {
        id: 44,
        kind: '[민법]',
        date: '대법원 2023. 5. 18. 선고 2020다8432 판결',
        tag: '채무불이행·해제권·원상회복·소멸시효',
        content: '채무불이행에 따른 해제의 의사표시 당시 이미 채무불이행의 대상이 되는 본래 채권이 시효가 완성되어 소멸하였다면, 해제권 및 이에 기한 원상회복 청구권도 더 이상 행사할 수 없거나 소멸된다.'
    },
    {
        id: 45,
        kind: '[형법]',
        date: '대법원 2023. 5. 18. 선고 2017도2760 판결',
        tag: '정당행위·긴급성·보충성·실효성',
        content: '정당행위인 판단기준인 목적·동기, 수단, 법익균형, 긴급성, 보충성은 불가분적으로 연관되어 하나의 행위를 이루는 요소들로 종합적으로 평가되어야 하고, 특히 행위의 긴급성과 보충성은 수단의 상당성을 판단할 때 고려요소의 하나로 참작하여야 하고 이를 넘어 독립적인 요건으로 요구할 것은 아니며, 다른 실효성 있는 적법한 수단이 없는 경우를 의미하는 것으로 일체의 법률적인 적법한 수단이 존재하지 않을 것을 의미하는 것은 아니다.'
    },
    {
        id: 46,
        kind: '[민법]',
        date: '대법원 2023. 3. 30. 선고 2022다289174 판결',
        tag: '도급·보수·인도·점유의 이전·검사',
        content: '도급계약에서 보수는 완성된 목적물의 인도와 동시에 지급해야 한다고 정하고 있는데, 이때 목적물의 인도는 단순한 점유의 이전만을 의미하는 것이 아니라 도급인이 목적물을 검사한 후 목적물이 계약 내용대로 완성되었음을 명시적 또는 묵시적으로 시인하는 것까지 포함하는 의미이다.'
    },
    {
        id: 47,
        kind: '[민법]',
        date: '대법원 2023. 3. 30. 선고 2022다296165 판결',
        tag: '임대차·전대차·부당이득·손해배상·해지',
        content: '임차인이 임대인의 동의를 받지 않고 제3자에게 임차권을 양도하거나 전대하는 등의 방법으로 임차물을 사용·수익하게 하더라도, 임대인이 이를 이유로 임대차계약을 해지하거나 그 밖의 다른 사유로 임대차계약이 적법하게 종료되지 않는 한 임대인은 임차인에 대하여 여전히 차임청구권을 가지므로, 임대차계약이 존속하는 한도 내에서는 제3자에게 불법점유를 이유로 한 차임 상당 손해배상청구나 부당이득반환청구를 할 수 없다.'
    },
    {
        id: 48,
        kind: '[형법]',
        date: '대법원 2023. 3. 30. 선고 2019도7446 판결',
        tag: '업무방해·위력·권한',
        content: '어떤 행위의 결과 상대방의 업무에 지장이 초래되었더라도 행위자가 상대방의 의사결정에 관여할 수 있는 권한을 가지고 있거나 업무상의 지시를 할 수 있는 지위에 있는 경우에는 원칙적으로 업무방해죄의 위력을 행사한 것이라고 보기 어렵다.'
    },
    {
        id: 49,
        kind: '[상법]',
        date: '대법원 2023. 4. 27. 선고 2017다239014 판결',
        tag: '책임보험·화재보험·보험자대위·피해자의 직접청구권',
        content: '화재를 당한 여러 피해자 중의 한 피해자와 체결한 화재보험계약에 따라 보험금으로 그 피해자의 손해를 전부 보상한 화재보험자가 책임보험자에게 보험자대위로 직접청구를 하는 경우, 화재보험자는 직접청구권을 행사하는 다른 피해자들보다 우선하여 책임보험금을 지급받을 수 없고 특별한 사정이 없는 한 피해자들에 대한 책임보험금 지급이 이루어진 다음 책임보험 한도액에 남은 금액이 있다면 이에 대해서 지급받을 수 있을 뿐이다. 또한 하나의 보험사고로 발생한 여러 피해자들의 손해액 합계가 책임보험자의 보험금 한도액을 초과하는 경우 일부 피해자만이 책임보험자를 상대로 직접청구권을 행사하였더라도 책임보험자가 지급할 의무가 있는 손해배상액을 산정할 때 다른 피해자들의 손해액을 고려할 필요가 없다.'
    },
    {
        id: 50,
        kind: '[민사소송]',
        date: '대법원 2023. 4. 27. 선고 2019다302985 판결',
        tag: '장래이행청구·청구이의의 소·사정변경·집행배제',
        content: '확정된 전소판결에서 A가 변론종결 후에도 B 소유의 토지를 점유하는 것이 변론종결 당시 확정적으로 예정되어 있다는 이유로 이를 인도할 때까지 지료 지급 또는 사용이익 상당의 부당이득 반환을 명하였는데, 만약 변론종결 후 A가 위 토지를 점유하지 않았음이 객관적으로 판명되었다면 위 전소판결의 변론종결 당시의 예측은 어긋나게 되었고, 이는 위 전소판결 확정 후에 새로운 사유가 발생하여 사정변경이 있다고 할 수 있다. 따라서 A는 위 토지를 점유하지 않는다는 사유를 주장하면서 위 확정된 전소판결의 변론종결 이후 금전지급을 명한 부분의 집행배제를 구하는 청구이의의 소를 제기할 수 있다.'
    },
    {
        id: 51,
        kind: '[민사소송]',
        date: '대법원 2023. 4. 27. 선고 2021다276225(본소), 2021다276232(반소) 판결',
        tag: '공시송달·추후보완항소·반소·소유권이전등기·말소등기',
        content: '소송서류 등이 공시송달의 방법으로 송달되어 확정된 제1심판결문을 기초로 등기권리자가 소유권이전등기를 마쳤으나 이후 제기된 추후보완항소에서 제1심판결이 취소되고 등기권리자의 청구가 기각되었다면, 등기의무자로서는 이미 등기명의를 이전받은 등기권리자를 상대로 위 추후보완항소 절차에서 반소를 제기하거나 별도로 소를 제기하여 소유권이전등기의 말소등기절차를 구할 수 있다.'
    },
    {
        id: 52,
        kind: '[행정법]',
        date: '대법원 2023. 4. 27. 선고 2020두47892 판결',
        tag: '하도급법·공정거래위원회·입찰참가자격제한·요청·처분·항고소송',
        content: '하도급법에 따라 공정거래위원회의 입찰참가자격제한 요청 결정이 있음을 알고 있는 사업자로 하여금 장차 후속 처분으로 이어지는 관련 행정기관의 입찰참가자격제한처분에 대하여만 다툴 수 있도록 하는 것보다는 그에 앞서 직접 입찰참가자격제한 요청 결정의 적법성을 다툴 수 있도록 함으로써 분쟁을 조기에 근본적으로 해결하도록 하는 것이 법치행정의 원리에도 부합하므로, 공정거래위원회의 입찰참가자격제한 요청 결정은 항고소송의 대상이 되는 처분에 해당한다'
    },
    {
        id: 53,
        kind: '[형법]',
        date: '대법원 2023. 4. 27. 선고 2020도34 판결',
        tag: '강제집행·집행관·위임·재개발정비사업조합·업무방해·집행개시신청',
        content: '채권자의 집행관에 대한 집행위임은 비록 민사집행법에 위임으로 표현되어 있더라도 이는 집행개시를 구하는 신청을 의미하는 것이지 민법상 위임이라고 볼 수는 없다. 따라서 집행관이 행하는 재개발정비사업조합의 건물명도소송 확정판결에 따른 강제집행은 집행관 고유한 직무에 해당하고, 이를 방해한 것을 두고 위 조합의 업무를 방해한 것이라고 볼 수 없다.'
    },
    {
        id: 54,
        kind: '[형법]',
        date: '대법원 2023. 4. 27. 선고 2018도8161 판결',
        tag: '경찰관·촬영·영장·위법수집증거·증거능력·나이트클럽·음란행위',
        content: '경찰관들이 범죄의 혐의가 포착된 상태에서 나이트클럽 내의 음란행위 영업에 관한 증거를 보전하기 위한 필요에 의하여, 불특정 다수에게 공개된 장소인 나이트클럽에 통상적인 방법으로 출입하여 손님들에게 공개된 모습을 촬영한 것이라면, 영장 없이 촬영하였다는 이유로 이를 위법하다고 할 수 없고 그 촬영물은 증거능력이 인정된다.'
    },
    {
        id: 55,
        kind: '[민법]',
        date: '대법원 2023. 4. 27. 선고 2022다306642 판결',
        tag: '지상권갱신청구권·지상물매수청구권·갱신거절·30년',
        content: '지상권갱신청구권은 지상권의 존속기간(최단기간 30년) 만료 후 지체 없이 행사하여야 하고, 지상권의 존속기간 만료 후 지체 없이 행사하지 않아서 지상권갱신청구권이 소멸한 경우에는, 지상권자의 적법한 갱신청구권의 행사와 지상권설정자의 갱신 거절을 요건으로 하는 지상물매수청구권은 발생하지 않는다. 이는 관습법상 법정지상권의 경우에도 마찬가지이다.'
    },
    {
        id: 56,
        kind: '[형사소송]',
        date: '대법원 2023. 6. 1. 선고 2018도19782 판결',
        tag: '압수·수색·전자정보·하드카피·이미징·공범·위법수집증거·증거능력',
        content: '선행 사건의 전자정보 압수·수색 과정에서 생성한 이미징 사본을 선행 사건의 판결 확정 이후 그 공범에 대한 범죄혐의 수사를 위해 새로 탐색·출력한 것은 위법하며, 이를 바탕으로 수집한 전자정보 등 2차적 증거는 위법수집증거에 해당한다. 즉, 전자정보 압수수색 과정에서 예외적으로 허용·생성되는 하드카피나 이미징 형태의 복제본은 무관정보를 포함하고 있어 압수 완료시 삭제·폐기의 대상이 될 뿐 새로운 범죄 혐의 수사를 위한 수사기관의 추가적인 탐색, 출력의 대상이 될 수 없다.'
    },
    {
        id: 57,
        kind: '[민법]',
        date: '대법원 2023. 6. 1. 선고 2023다217534 판결',
        tag: '유언증서·녹음에 의한 유언·분실·멸실',
        content: '유언증서가 성립한 후에 멸실되거나 분실되었다는 사유만으로 유언이 실효되는 것은 아니고 이해관계인은 유언증서의 내용을 증명하여 유언의 유효를 주장할 수 있다. 이는 녹음에 의한 유언이 성립한 후에 녹음테이프나 녹음파일 등이 멸실 또는 분실된 경우에도 마찬가지이다.'
    },
    {
        id: 58,
        kind: '[형법]',
        date: '대법원 2023. 6. 1. 선고 2020도2884 판결',
        tag: '주권·주식·재물·횡령죄·예탁결제원·명의신탁',
        content: '주주권을 표창하는 주권은 유가증권으로서 재물에 해당되므로 횡령죄의 객체가 될 수 있으나, 자본의 구성단위 또는 주주권을 의미하는 주식은 재물이 아니므로 횡령죄의 객체가 될 수 없다. 따라서 주권이 발행되지 않은 주식에 대해 명의신탁약정을 체결하여 주주명부에 등재된 이후 주식발행 회사가 상장되면서 주식이 예탁결제원에 예탁되어 계좌 간 대체 기재 방식으로 양도가능하게 되었더라도 주권이 발행되지 않았다면 횡령죄의 대상인 재물에 해당하지 않는다.'
    },
    {
        id: 59,
        kind: '[형사소송]',
        date: '대법원 2023. 6. 1. 선고 2023도3741 판결',
        tag: '검사·피의자신문조서·증거능력·내용부인·공범·대향범',
        content: '검사가 작성한 피의자신문조서는 공판준비·공판기일에 그 피의자였던 피고인 또는 변호인이 그 내용을 인정할 때에 한정하여 증거로 할 수 있는데, 검사가 작성한 피의자신문조서란 당해 피고인에 대한 피의자신문조서만이 아니라 당해 피고인과 공범관계에 있는 다른 피고인이나 피의자에 대하여 검사가 작성한 피의자신문조서도 포함되고, 여기서 말하는 공범에는 형법 총칙의 공범 이외에도 서로 대향된 행위의 존재를 필요로 할 뿐 각자의 구성요건을 실현하고 별도의 형벌 규정에 따라 처벌되는 강학상 필요적 공범 또는 대향범까지 포함한다. 따라서 필로폰 매도 범행으로 기소된 피고인이 필로폰을 매수한 공범에 대한 검찰 피의자신문조서 사본에 대해 내용 부인했다면 증거로 사용할 수 없다.'
    },
    {
        id: 60,
        kind: '[형법]',
        date: '대법원 2023. 6. 1. 선고 2023도1096 판결',
        tag: '자동차·횡령죄·등록명의자·할부대금',
        content: '자동차에 대한 소유권의 득실변경은 등록을 함으로써 그 효력이 생기고 등록이 없는 한 대외적 관계에서는 물론 당사자의 대내적 관계에서도 소유권을 취득할 수 없는 것이 원칙이지만, 당사자 사이에 소유권을 등록명의자 아닌 자가 보유하기로 약정하였다는 등의 사정이 있는 경우에는 그 내부관계에 있어서는 등록명의자 아닌 자가 소유권을 보유하게 된다. 따라서 자동차 매수인이 매도인으로부터 승낙을 받고 이전등록 전에 자동차를 사용하다가 매수인이 할부대금 등을 납부하지 않았다는 이유로 매도인이 차량의 반환을 요구했는데 매수인이 이를 거부한 경우 횡령죄가 성립한다고 단정할 수 없다.'
    }, 
    {
        id: 61,
        kind: '[민사집행]',
        date: '대법원 2023. 6. 1. 선고 2020다242935 판결',
        tag: '가압류·가처분·보전처분·집행채권자·손해배상',
        content: '가압류·가처분 등 보전처분은 법원의 재판에 따라 집행되지만, 이는 실체법상 청구권이 있는지 여부를 본안소송에 맡기고 단지 소명에 따라 채권자의 책임 아래 하는 것이므로, 보전처분의 집행 후 집행채권자가 본안소송에서 패소 확정되었다면 보전처분의 집행으로 인하여 채무자가 입은 손해에 대하여는 특별한 반증이 없는 한 집행채권자에게 고의 또는 과실이 있다고 추정되고, 따라서 집행채권자는 보전처분의 부당한 집행으로 인한 손해에 대하여 채무자에게 이를 배상할 책임이 있다.'
    }, 
    {
        id: 62,
        kind: '[민법]',
        date: '대법원 2023. 6. 1. 선고 2023다209045 판결',
        tag: '임대차·영구임대·임차권설정등기',
        content: '민법상 처분능력, 권한 없는 자의 단기임대차의 경우에만 기간의 최장기를 제한하고 있을 뿐, 임대차기간이 영구인 임대차계약의 체결을 불허하는 규정은 없다. 소유자가 사용·수익의 권능을 대세적으로 포기하는 것은 원칙적으로 허용되지 않으나, 특정인에 대하여 채권적으로 사용·수익권을 포기하는 것까지 금지되는 것은 아니다. 따라서 기간이 영구인 임대차계약도 유효하고 관련된 임차권설정등기도 할 수 있다. 영구임대의 취지는 임대인이 차임연체 등 임차인의 귀책사유로 인한 채무불이행이 없는 한 임차인이 임대차관계의 유지를 원하는 동안 임대차계약의 존속을 보장하는 의미로, 이는 임대인에게는 의무가 되나 임차인에게는 권리의 성격을 갖는 것이므로 임차인으로서는 언제라도 그 권리를 포기할 수 있고, 그 경우 임대차계약은 기간의 정함이 없는 임대차가 된다.'
    }, 
    {
        id: 63,
        kind: '[민사소송]',
        date: '대법원 2023. 6. 1. 선고 2020다211238 판결',
        tag: '확인의 이익·집합건물·관리인',
        content: '법인 아닌 사단의 대표자 또는 구성원의 지위에 관한 확인소송에서 대표자 또는 구성원 개인을 상대로 제소하는 경우에는 청구를 인용하는 판결이 내려진다 하더라도 그 판결의 효력이 해당 단체에 미친다고 할 수 없기 때문에 대표자 또는 구성원의 지위를 둘러싼 당사자들 사이의 분쟁을 근본적으로 해결하는 유효적절한 방법이 될 수 없으므로, 그 단체를 상대로 하지 않고 대표자 또는 구성원 개인을 상대로 한 청구는 확인의 이익이 없어 부적법하다. 예를 들어, 집합건물의 구분소유자들이 집합건물의 관리단이 아닌 그 관리단의 관리자 개인을 상대로 관리인자격 부존재확인청구를 하면 확인의 이익이 없다.'
    }, 
    {
        id: 64,
        kind: '[형법]',
        date: '대법원 2023. 6. 1. 선고 2020도5233 판결',
        tag: '가정폭력처벌법·피해자보호명령·가정폭력·무죄판결',
        content: '가정폭력처벌법에 따른 피해자보호명령을 받은 자가 보호명령을 이행하지 않아 불이행죄로 기소된 이후, 보호명령의 전제가 된 가정폭력행위에 대하여 형사절차에서 무죄판결을 선고받아 확정된 경우에도 위 불이행죄로 처벌할 수 있다.'
    }, 
    {
        id: 65,
        kind: '[상법]',
        date: '대법원 2023. 4. 27. 선고 2021다309576 판결',
        tag: '책임보험·직접청구권·보험자대위·화재보험·혼동',
        content: '책임보험 한도액이 다수 피해자의 손해 합계액에 미치지 못하여 피해자의 직접청구권과 화재보험사가 보험금을 지급한 후 보험자대위로 취득한 직접청구권이 경합하는 경우 원칙적으로 피해자의 직접청구권이 우선한다. 또한 가해자의 책임보험자가 다른 피해자의 화재보험자이기도 하여 직접청구권을 보험자대위로 취득하였다면 책임보험자의 손해배상채무는 혼동으로 소멸한다.'
    }, 
    {
        id: 66,
        kind: '[민법]',
        date: '대법원 2023. 4. 27. 선고 2022다302497(본소), 2022다302503(반소) 판결',
        tag: '임대차보증금·이행의 제공·지연손해금·청구이의·기판력·동시이행관계·집행력',
        content: '임대기간 만료 후 임대차보증금반환을 구하는 소가 제기되었고 새로운 임차인을 구하는 데 협조한 것을 임차인의 목적물인도에 관한 이행의 제공으로 보아 임대차보증금반환채무의 이행지체에 따른 지연손해금 지급의무까지 확정되었으나, 그 후 임차인이 위와 같은 협조를 거절했다면 임대인은 확정판결의 변론종결 후(변론없이 판결한 때는 판결선고 후)의 새로운 사정으로서 이행제공의 중지라고 볼 수 있고, 목적물인도의무와 임대차보증금반환의무의 동시이행관계에 따른 청구이의의 소를 제기하여 위 확정판결의 지연손해금에 따른 집행력을 배제할 수 있다.'
    }, 
    {
        id: 67,
        kind: '[민사소송]',
        date: '대법원 2023. 4. 27. 선고 2021다262905 판결',
        tag: '선택적 병합·항소심·상고법원·상고이유·전부파기',
        content: '선택적으로 병합된 수 개의 청구를 모두 기각한 항소심판결에 대하여 원고가 상고한 경우, 상고법원이 선택적 청구 중 일부라도 그에 관한 상고가 이유 있다고 인정할 때에는 원심판결을 전부 파기하여야 한다.'
    }, 
    {
        id: 68,
        kind: '[민법]',
        date: '대법원 2023. 4. 27. 선고 2022다304189 판결',
        tag: '첨부·부합·부당이득·보상청구·제3자',
        content: '첨부(부합·혼화·가공)로 인하여 손해를 받는 자는 부당이득의 요건에 따라 보상을 받을 수 있다. 그런데 계약에 따른 급부가 계약의 상대방 아닌 제3자의 이익으로 된 경우, 급부를 한 계약당사자가 제3자에 대하여 직접 부당이득반환을 구할 수 없고 나아가 부당이득의 요건에 따르는 위 첨부로 인한 보상청구도 허용되지 않는다.'
    }
]




function Cases() {

    return (
        <ul class="MethodWrapper2">
            {recent_cases.slice(0).reverse().map(cases => (
                <li>{cases.kind} {cases.date}, <i>{cases.tag}</i> <p align="justify">{cases.content}</p></li>
            ))}
        </ul>
    );
}

export default Cases;