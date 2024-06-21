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
    <div className="CreateBook" style={{ backgroundColor: "#0a192f", color: "#a8b2d1", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="background-layer" style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "#112240", zIndex: -1 }}></div>
      <div className="container" style={{ maxWidth: "700px", padding: "20px", backgroundColor: "#112240", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/" className="btn" style={{ backgroundColor: "#64ffda", color: "#0a192f", marginBottom: "20px" }}>
              Show Book List
            </Link>
          </div>
          <div className="col-12">
            <h1 className="display-6 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="author">Author</label>
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
                    <label htmlFor="published_date">Published Date</label>
                    <input
                      type="date"
                      name="published_date"
                      className="form-control input-placeholder"
                      value={book.published_date}
                      onChange={onChange}
                      style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="isbn">ISBN</label>
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
                    <label htmlFor="publisher">Publisher</label>
                    <input
                      type="text"
                      placeholder="Publisher of the Book"
                      name="publisher"
                      className="form-control input-placeholder"
                      value={book.publisher}
                      onChange={onChange}
                      style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda" }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      placeholder="Description of the Book"
                      name="description"
                      className="form-control input-placeholder"
                      value={book.description}
                      onChange={onChange}
                      style={{ backgroundColor: "#0a192f", color: "#a8b2d1", border: "1px solid #64ffda", resize: "none", minHeight: "100px" }}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  className="btn mt-4 mb-4"
                  style={{ backgroundColor: "#64ffda", color: "#0a192f", width: "50%" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
