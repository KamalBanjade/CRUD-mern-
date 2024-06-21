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
    <div className='ShowBookList' style={{ backgroundColor: "#0a192f", color: "#a8b2d1", minHeight: "100vh", padding: "20px" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center' style={{ color: "#a8b2d1" }}>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn'
              style={{ backgroundColor: "#64ffda", color: "#0a192f", marginBottom: "20px" }}
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr style={{ borderColor: "#64ffda" }} />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;
