import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails_deleteClick');
      });
  };

  const BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{book.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails' style={{ backgroundColor: '#0a192f', color: '#a8b2d1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div className='container' style={{ backgroundColor: '#112240', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className='row'>
          <div className="col-md-12 text-left">
            <Link
              to="/"
              className="btn hover-effect"
              style={{
                marginBottom: "10px",
                padding: "10px 20px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="currentColor"
                width="20px"
                height="20px"
                style={{ marginRight: "8px", borderRadius:"50%"}}
              >
                <circle cx="50" cy="50" r="50" fill="black" />
                <polygon points="60,30 40,50 60,70" fill="white" />
              </svg>
              Back
            </Link>
          </div>


          <div className='col-md-12'>
            <h1 className='display-6 text-center' style={{ marginBottom: '20px', fontWeight: 'bold' }}>Book's Record</h1>
            <p className='lead text-center' style={{ marginBottom: '40px' }}>View Book's Info</p>
            <hr style={{ borderColor: '#64ffda' }} />
            <br />
          </div>
          <div className='col-md-12'>{BookItem}</div>
          <div className="col-md-6 text-right">
            <Link
              to={`/edit-book/${book._id}`}
              className="btn btn-lg btn-block hover-effect"
              style={{ marginTop: "10px", fontSize: "15px" }}
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
