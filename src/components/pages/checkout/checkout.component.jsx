import React from 'react';

import './checkout.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkout-item/checkout-item.component';

const CheckoutPage = ({ items, total }) => (
  <div>
    <h2>Checkout Page</h2>
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item}></CheckoutItem>
      ))}
      <div className='cart-total'>
        <span>Total: ${total}</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
