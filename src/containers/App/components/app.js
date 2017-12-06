import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../../../components/page-layout/header.js';
import Home from '../../../components/pages/home/home';
import Login from '../../../components/pages/login/login';
import Meals from '../../../containers/Meals/index.js';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/meals" component={Meals} />
        </Switch>
      </div>
    </Router>
  );
}
