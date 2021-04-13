import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const kotlin_codes = [
    {
        id: 1,
        name: `인(Person)`,
        note: `인(人)은 권리를 가지고 의무를 부담할 수 있는 자격, 즉 권리능력을 가지는 주체를 말합니다`,
        code: `
open class Person(_name: String){
    // 이름
    var name: String = _name
        
    var birth: Date? = null
    var death: Date? = null
        
    var age: Int? = null
                
    constructor(_name: String, _birth: Date): this(_name) {
        birth = _birth
    }
        
    constructor(_name: String, _birth: Date, _death: Date): this(_name, _birth) {
        death = _death
    }
        
    override fun toString(): String {
        return name
    }
}
`
    },
    {
        id: 2,
        name: `자연인(Natural Person)`,
        note: `사람은 생존한 동안 권리와 의무의 주체가 됩니다`,
        code: `
class NaturalPerson(_name: String): Person(_name) {

    // 태아 여부
    var fetus: Boolean = false
        
    // 성별
    var sex: Sex = Sex.MALE
        
    // 미성년자 여부
    var minor: Boolean = false
        
    // 배우자
    var spouse: NaturalPerson? = null
        
    // 부모
    var father: NaturalPerson? = null
    var mother: NaturalPerson? = null
        
    // 직계비속
    var linealDescendant = mutableListOf<NaturalPerson>()
        
}
        
enum class Sex {
    MALE, FEMALE
}
`
    },
    {
        id: 3,
        name: `법인(Legal Person)`,
        note: `법인은 설립등기를 함으로써 성립하고 성질상·법령상·정관상으로 권리능력이 제한됩니다`,
        code: `
class LegalPerson(_name: String): Person(_name) {

    // 대표
    var representative: NaturalPerson? = null
        
    // 이사
    var director = mutableListOf<NaturalPerson>()
        
    constructor(_name: String, _representative: NaturalPerson): this(_name) {
        representative = _representative
    }
        
}
`
    }

]



function LegalCode() {

    return (
        <ol class="MethodWrapper">
            {kotlin_codes.map(codes => (
                <div>
                    <h3>{ codes.name }</h3>
                    <p>{ codes.note }</p>
                <SyntaxHighlighter language="kotlin" style={docco}>
                    { codes.code }
                </SyntaxHighlighter>
                <br />
                </div>
            ))}
        </ol>
    );



}


export default LegalCode;