import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const kotlin_codes = [
    {
        id: 1,
        name: `test1`,
        note: `소멸시효`,
        code: `fun maxOf(a: Int, b: Int): Int {
            if (a > b) {
                return a
            } else {
                return b
            }
        }`
    },
    {
        id: 2,
        name: `test2`,
        note: `표현대리`,
        code: `fun printProduct(arg1: String, arg2: String) {
            val x = parseInt(arg1)
            val y = parseInt(arg2)
        
            if (x != null && y != null) {
                // x and y are automatically cast to non-nullable after null check Bongcheol Park
                println(x * y)
            }
            else {
                println("'$arg1' or '$arg2' is not a number")
            }    
        }`
    }

]



function LegalCode() {

    return (
        <ol class="MethodWrapper">
            {kotlin_codes.map(codes => (
                <div>
                    <h3>{ codes.name }</h3>
                    <p>{ codes.note }</p>
                <SyntaxHighlighter language="kotlin" style={docco} showLineNumbers={true} wrapLongLines={true}>
                    { codes.code }
                </SyntaxHighlighter>
                </div>
            ))}
        </ol>
    );



}


export default LegalCode;