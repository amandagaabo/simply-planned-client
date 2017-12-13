import React from 'react';
import {connect} from 'react-redux';
import {refreshAuthToken} from './actions';

import Layout from './components/layout';

export class App extends React.Component {
  render() {
    return (
      <Layout {...this.props} />
    );
  }
};

export const mapStateToProps = state => ({
  hasAuthToken: state.app.auth.authToken !== null,
  loggedIn: state.app.auth.currentUser !== null
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshAuthToken: () => {
      dispatch(refreshAuthToken())
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
