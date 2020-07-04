import React from 'react';

import './cart-dropdown.style.scss';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
