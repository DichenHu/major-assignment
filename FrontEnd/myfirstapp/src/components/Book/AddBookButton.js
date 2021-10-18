import React from 'react'
import {link, Link} from "react-router-dom";

 const CreatePersonButton=() => {
    return (
        <React.Fragment>
        <Link to="/addBook"
        className="btn btn-lg btn-info">
        Add a book
        </Link>
        </React.Fragment>
    )
};
export default CreatePersonButton;