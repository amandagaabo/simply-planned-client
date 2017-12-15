import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import Header from './header/header';
import Home from './home/home';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import Dashboard from '../../../containers/Dashboard/dashboard';

export default function Layout(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" children={() => <Home {...props} />} />
          <Route exact path="/sign-up" children={() => <SignUp {...props} />} />
          <Route exact path="/login" children={() => <Login {...props} />} />
          <Route exact path="/dashboard" children={() => <Dashboard {...props} />} />
        </Switch>
      </div>
    </Router>
  );

}
