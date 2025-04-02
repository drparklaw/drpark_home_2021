import React from 'react';

const drpark_exam = [
    {
        id: 1,
        name: 'http://dongalaw.org',
        title: '"Dong-A Law School CBT System"',
        publisher: 'for Laptops(Mac compatible)',
        year: '2023.11.'
    },
    {
        id: 2,
        name: 'Ministry of Justice',
        title: '"13th Bar Exam Committee Member"',
        publisher: 'Grading Committee',
        year: '2024.2.'
    }
]



function Exam() {

    return (
        <ol>
            {drpark_exam.slice(0).reverse().map(ex => (
                <li>{ex.name}, {ex.title}, {ex.publisher}, {ex.year}</li>
            ))}
        </ol>
    );
}

export default Exam;
