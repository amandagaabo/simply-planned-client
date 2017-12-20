import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { refreshAuthToken, setReady } from './actions';
import Layout from './components/layout';

export class App extends React.Component {
  componentWillMount() {
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in localStorage
      this.props.dispatch(refreshAuthToken());
    } else {
      this.props.dispatch(setReady(true));
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
      () => this.props.dispatch(refreshAuthToken()),
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
    if(this.props.ready) {
      return (
        <Layout {...this.props} />
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  hasAuthToken: state.app.auth.authToken !== null,
  loggedIn: state.app.auth.currentUser !== null,
  ready: state.app.auth.ready
});


export default connect(mapStateToProps)(App)
