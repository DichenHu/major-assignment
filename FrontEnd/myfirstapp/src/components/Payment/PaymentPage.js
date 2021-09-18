import React from "react";
import { useParams } from "react-router-dom";
import CollapseSideBar from "../Layout/CollapseSideBar";
import MastercardPage from "./MasterCardPage";
import { PaymentSideBar } from "./PaymentSidebar";
import PaypalPage from "./PaypalPage";

const PaymentPage = () => {
    let { method } = useParams();

    function renderView() {
        switch (method) {
            case "paypal":
                return <PaypalPage />;

            case "mastercard":
                return <MastercardPage />;
            default:
                break;
        }
    }

    return (
        <div className="row">
            <div className="col-4">
                {" "}
                <CollapseSideBar />
            </div>
            <div className="col-8"> {renderView()}</div>
        </div>
    );
};

export default PaymentPage;
