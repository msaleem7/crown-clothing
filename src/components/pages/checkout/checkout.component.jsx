import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import {
  CheckoutPageContainer,
  ChekoutHeaderContainer,
  HeaderBlockContainer,
  CartTotalContainer,
  StripeButtonContainer,
} from './checkout.styles';

const CheckoutPage = ({ items, total }) => (
  <div>
    <h2>Checkout Page</h2>
    <CheckoutPageContainer className='checkout-page'>
      <ChekoutHeaderContainer className='checkout-header'>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </ChekoutHeaderContainer>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item}></CheckoutItem>
      ))}
      <CartTotalContainer>
        <span>Total: ${total}</span>
      </CartTotalContainer>
      <StripeButtonContainer price={total}></StripeButtonContainer>
    </CheckoutPageContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
