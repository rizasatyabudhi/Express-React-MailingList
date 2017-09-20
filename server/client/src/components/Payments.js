import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

// amount prop: price , in dollar cent, 500 cent == 5 dollar
// token prop : callback function that will be called after the we receive authorization token from stripe API
class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="$5 for 5 Email Credits"
          amount={500}
          token={token => {
            console.log(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Payments;
