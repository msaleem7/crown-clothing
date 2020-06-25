import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/hompage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './components/pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/hats' component={HatsPage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignUpAndSignIn}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
