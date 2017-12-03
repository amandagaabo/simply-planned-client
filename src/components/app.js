import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import Header from './header';
import Login from './login';
import GroceryList from './grocery-list'

import './app.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/groceries" component={GroceryList} />
        </Switch>
      </div>
    </Router>
  );
}
