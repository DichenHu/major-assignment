import React, { Component } from "react";

export const BookCell = ({ book }) => {
    return (
        <div>
            <img
                src={book.image}
                style={{
                    height: 300,
                    width: 300,
                }}
            />

            <br />

            <br />
            <p>{book.bookName}</p>
            <br />

            <p>{book.bookDescription}</p>
            <br />
        </div>
    );
};
