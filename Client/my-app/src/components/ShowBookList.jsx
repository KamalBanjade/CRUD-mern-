import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'There is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList' style={{ backgroundColor: "#0a192f", color: "#a8b2d1", minHeight: "100vh", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className='container' style={{ backgroundColor: "#112240", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <br />
            <h2 className='display-4' style={{ color: "#a8b2d1", marginBottom: "20px", fontWeight: "bold" }}>Books List</h2>
            <Link
              to='/create-book'
              className='btn'
              style={{ backgroundColor: "#64ffda", color: "#0a192f", marginBottom: "20px", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}
            >
              + Add New Book
            </Link>
            <br />
            <hr style={{ borderColor: "#64ffda" }} />
          </div>
        </div>
        <div className='list'>
          {bookList}
        </div>
      </div>
    </div>
  );
}

export default ShowBookList;
