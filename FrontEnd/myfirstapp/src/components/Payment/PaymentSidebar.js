import React, { Component } from "react";
import { Link } from "react-router-dom";

export const PaymentSideBar = () => {
    return (
        <div
            style={{
                border: "solid 1px",
                padding: 12,
            }}
        >
            <Link to="/payment/paypal">
                <button className="btn btn-primary">Paypal</button>
            </Link>
            <br />
            <br />
            <Link to="/payment/mastercard">
                <button className="btn btn-primary">Mastercard</button>
            </Link>
        </div>
    );
};
