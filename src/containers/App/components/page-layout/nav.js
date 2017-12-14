import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../../actions';
import {clearAuthToken} from '../../local-storage';

import './nav.css';

export function Nav(props) {
  function logOut(e) {
    e.preventDefault();
    props.dispatch(setCurrentUser(null));
    props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  if (props.isLoggedIn) {
    return (
      <button onClick={e => logOut(e)}>Log Out</button>
    );
  } else {
    return (
      <Link to="/login" className="header-link">Log In</Link>
    );
  }
};

export const mapStateToProps = state => ({
  isLoggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
