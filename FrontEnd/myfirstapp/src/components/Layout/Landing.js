import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">
                                    Eclectus Book Store
                                </h1>
                                <p className="lead">
                                    Sign up or Login
                                </p>
                                <hr />
                                <Link
                                    className="btn btn-lg btn-primary mr-2"
                                    to="/register"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    className="btn btn-lg btn-secondary mr-2"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
