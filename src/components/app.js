import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import Nav from './nav'
import Home from './home';
import Login from './login';
import Meals from './meals';
import GroceryList from './grocery-list';

import './app.css';

export default function App(props) {
  let nav;
  if (props.user) {
    nav = <Nav />
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/meals" component={Meals} />
          <Route exact path="/groceries" component={GroceryList} />
        </Switch>
        {nav}
      </div>
    </Router>
  );
}

App.defaultProps = {
  user: "amanda"
}
