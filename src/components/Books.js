import React from 'react';

const drpark_books = [
    {
        id: 1,
        name: '김용의·박봉철',
        title: '「4차산업혁명시대의 사회적 변화와 대응 방안」',
        publisher: '박영사',
        year: '2022.6',
        isbn: '979-11-303-4244-3'
    }
]



function Books() {

    return (
        <ol class="MethodWrapper">
            {drpark_books.slice(0).reverse().map(book => (
                <li>{book.name}, {book.title}, {book.publisher}, {book.year}</li>
            ))}
        </ol>
    );
}

export default Books;
