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
            <p>{book.name}</p>
            <br />

            <p>{book.price}</p>
            <br />

            <p>{book.customer}</p>
        </div>
    );
};
