import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] =useState([]);

    useEffect(() =>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        console.log(data);
        
    } ,[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Book</h2>
            <p>{books.length}</p>
            <div>
            {/* {
                books.map(book => )
            } */}
            </div>
        </div>
    );
};

export default Books;