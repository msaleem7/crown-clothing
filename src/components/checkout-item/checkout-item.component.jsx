import React from 'react';

import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={item.imageUrl} alt='item' />
    </div>
    <span className='name'>{item.name}</span>
    <span className='quantity'>{item.quantity}</span>
    <span className='price'>{item.price}</span>
    <span className='remove-button' onClick={() => removeItem(item)}>
      &#10005;
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
