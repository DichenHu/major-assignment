import React from "react";
import { useParams } from "react-router-dom";
import AdmSideBar from "../Layout/AdmSideBar";


const Aprove = () => {
    let { method } = useParams();

    function renderView() {
        switch (method) {
            case "paypal":
                return true;

            case "mastercard":
                return true;
            default:
                break;
        }
    }

    return (
        <div className="row">
            <div className="col-4">
                {" "}
                <AdmSideBar />
            </div>
            <div className="col-8"> {renderView()}</div>
        </div>
    );
};

export default Aprove;