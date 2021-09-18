import React, { Component } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    var { id } = useParams();

    return <div>Book Detail ID {id}</div>;
}

export default BookDetail