import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import Header from './header/header';
import Home from './home/home';
import Login from './Login/login';
import SignUp from './SignUp/sign-up';
import Dashboard from '../../Dashboard/dashboard';
import NotFoundPage from './not-found/not-found-page';

export default function Layout(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
