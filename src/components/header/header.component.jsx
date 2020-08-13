import React from 'react';
import './header.style.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <Link className='option' to='/'>
          <div onClick={signOutStart}>SIGN OUT</div>
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
