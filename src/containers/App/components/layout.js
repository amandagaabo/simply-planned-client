import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

import Header from './page-layout/header';
import Home from './home/home';
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import Dashboard from '../../../containers/Dashboard/dashboard';

export default class Layout extends React.Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in localStorage
      this.props.dispatch(this.props.onRefreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(this.props.onRefreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" children={() => <Home {...this.props} />} />
            <Route exact path='/sign-up' children={() => <SignUp {...this.props} />} />
            <Route exact path="/login" children={() => <Login {...this.props} />} />
            <Route path="/dashboard" children={() => <Dashboard {...this.props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
