import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51H5SKIBVw7tljyEB5ZFGPMj7gArBPUFbNZoUrFATuP5WCwr36F3BiyaYTdGeZc7EsQsZqVMy7b1y8Wk7q5Ui1j0X00l5uSNlPb';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      name='Crown Clothing Ltd.'
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
};

export default StripeButton;
