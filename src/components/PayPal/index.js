import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PropTypes from "prop-types";

const PayPal = (props) => {
  console.log(props.total);
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQr-g-bV5AmGKfpc8eSkpew7_sw0vU-DrO9UHu77YYjJlXs1NjWpVu-rFNl6vzC5zsz2K3xBRYpXZvW-",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: props.total,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              props.handleCheckout();
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

PayPal.propTypes = {};

export default PayPal;
