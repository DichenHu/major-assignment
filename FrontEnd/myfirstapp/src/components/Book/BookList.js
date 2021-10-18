import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BookCell } from "./BookCell";
import axios from 'axios';
import {getBook} from "../../actions/bookActions";
import { Link } from "react-router-dom";

const frameStyle = {
    border: "solid",
    borderWidth: 1,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 12,
};
class BookList extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/api/book/getBook`)
          .then(res => {
            const books = res.data;
            this.setState({ books });
          })
      }

      render() {
        return (
          <ul>
            { this.state.books.map(books => <li>{books.name}</li>)}
          </ul>
        )
      }

    render() {
        return (
            <div className="container">
                <h2>Books</h2>
                <hr class="solid"></hr>

                <div className="container" style={frameStyle}>
                    <h5>Book List</h5>
                    <hr class="solid"></hr>

                    <div class="row">
                        {this.state.books
                            ? this.state.books.map((book) => (
                                  <div
                                      class="col-4"
                                      style={{
                                          height: 500,
                                          width: 300,
                                          border: "solid 1px",
                                      }}
                                  >
                                      <Link to={`/book/${book.id}`}>
                                          {<BookCell book={book} />}
                                      </Link>
                                  </div>
                              ))
                            : "Loading"}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {getBook})(BookList);
