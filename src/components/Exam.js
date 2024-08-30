import React from 'react';

const drpark_exam = [
    {
        id: 1,
        name: 'http://dongalaw.org',
        title: '"Dong-A Law School Internal CBT System"',
        publisher: 'for Laptops (Mac Compatible)',
        year: 'November 2023'
    },
    {
        id: 2,
        name: 'Ministry of Justice',
        title: '"13th Bar Exam Committee Member"',
        publisher: 'Grading Committee',
        year: 'February 2024'
    }
]



function Exam() {

    return (
        <ol class="MethodWrapper">
            {drpark_exam.slice(0).reverse().map(ex => (
                <li>{ex.name}, {ex.title}, {ex.publisher}, {ex.year}</li>
            ))}
        </ol>
    );
}

export default Exam;
