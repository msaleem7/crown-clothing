import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/hompage/homepage.component'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
