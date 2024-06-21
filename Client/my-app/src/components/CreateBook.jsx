import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'; // Make sure this imports your CSS file

const CreateBook = (props) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/books", book)
      .then((res) => {
        setBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  return (
    <div className="CreateBook" style={{ backgroundColor: "#0a192f", color: "#a8b2d1", minHeight: "100vh", padding: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn" style={{ backgroundColor: "#64ffda", color: "#0a192f", marginBottom: "20px" }}>
              Show Book List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control input-placeholder"
                  value={book.title}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control input-placeholder"
                  value={book.isbn}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control input-placeholder"
                  value={book.author}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control input-placeholder"
                  value={book.description}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="date"
                  placeholder="Published Date"
                  name="published_date"
                  className="form-control input-placeholder"
                  value={book.published_date}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control input-placeholder"
                  value={book.publisher}
                  onChange={onChange}
                  style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-block mt-4 mb-4 w-100"
                style={{ backgroundColor: "#64ffda", color: "#0a192f" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
