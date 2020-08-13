import './App.css';

import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutPage from './components/pages/checkout/checkout.component';
import HomePage from './components/pages/hompage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './components/pages/sign-up-and-sign-in/sign-up-and-sign-in.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/checkout' component={CheckoutPage}></Route>
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignUpAndSignIn></SignUpAndSignIn>
            )
          }
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
