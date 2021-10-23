import React, { Component } from 'react'

class Person extends Component {
    render() {
        return (
            <div className="container">
                            <div className="card card-body bg-light mb-3">
                                <div className="row">
                                    <div className="col-2">
                                        <span className="mx-auto">Welcome to</span>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-8">
                                        <h3>Eclectus Book Store</h3>
                                        <p></p>
                                    </div>
                                    <div className="col-md-4 d-none d-lg-block">
                                        <ul className="list-group">
                                            <a href="/bookList">
                                                <li className="list-group-item board">
                                                    <i className="fa fa-book pr-1">View Books </i>
                                                </li>
                                            </a>
                                            <a href="/paypal">
                                                <li className="list-group-item update">
                                                    <i className="fa fa-shopping-cart pr-1">View Payment Page</i>
                                                </li>
                                            </a>
                                            <a href="/soldBook">
                                                <li className="list-group-item update">
                                                    <i className="fa fa-search">View Search</i>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}
export default Person;
