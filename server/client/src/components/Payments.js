import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

// amount prop: price , in dollar cent, 500 cent == 5 dollar
// token prop : callback function that will be called after the we receive authorization token from stripe API
class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          amount={500}
          token={token => {
            console.log(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
      </div>
    );
  }
}

export default Payments;
