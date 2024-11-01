import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
    console.log(data);
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Book</h2>
      <p>{books.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <Book
          book={book}
           key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
