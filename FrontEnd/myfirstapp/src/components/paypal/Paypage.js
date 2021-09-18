import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";

class Paypage extends Component {
  render() {
    return (
      <div className="Paypage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-12 text-center">
                <button onClick={this.iamafunction}>Paypal</button>
              </h1>

              <h1 className="display-4 text-center">Pay with Paypal</h1>
              <p className="display-10 text-center">
                Enter your email or mobile number to get started
              </p>

              <form action="dashboard.html">
                <div className="form-group">
                  <input
                    type="email or mobile number"
                    className="form-control form-control-lg"
                    placeholder="Email or mobile number"
                    name="email or mobile"
                  />
                </div>
                <div className="conyemt-container">
                <div>
            <h3>Welcome using Paypal</h3>

            <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    // alert(
                    //     "Transaction completed by " +
                    //         details.payer.name.given_name
                    // );

                    // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //         orderID: data.orderID,
                    //     }),
                    // });
                }}
            />
        </div>
                    
                  <p font color="blue">forget password?</p>
                </div>
                <div className="form-group"></div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paypage;
