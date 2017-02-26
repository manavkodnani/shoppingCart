import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductList from './ProductList.jsx'
import Checkout from './Checkout.jsx'
import Payment from './Payment.jsx'
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/Checkout' component={Checkout} />
      <Route path='/Payment' component={Payment} />
    </Route>
  </Router>,
  document.getElementById('root')
);
