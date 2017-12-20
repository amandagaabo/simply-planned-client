import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser, setAuthToken } from '../../actions';
import { clearAuthToken } from '../../../../utils/local-storage';

import './nav.css';

export function Nav(props) {
  function logOut() {
    props.dispatch(setCurrentUser(null));
    props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  if (props.loggedIn && props.pathname === '/dashboard') {
    return (
      <div className="header-link-container">
        <a
          className="header-link"
          onClick={logOut}
          tabIndex="0"
          role="button"
          onKeyPress={logOut}
        >
          Log Out
        </a>
      </div>
    );
  } else if (props.loggedIn) {
    return (
      <ul className="header-list header-link-container">
        <li><Link to="/dashboard" className="header-link">Dashboard</Link></li>
        <li>
          <a
            className="header-link"
            onClick={logOut}
            tabIndex="0"
            role="button"
            onKeyPress={logOut}
          >
            Log Out
          </a>
        </li>
      </ul>
    );
  } else if (props.pathname === '/login') {
    return (
      <div className="header-link-container">
        <Link to="/sign-up" className="header-link">Sign Up</Link>
      </div>
    );
  }
  return (
    <div className="header-link-container">
      <Link to="/login" className="header-link">Log In</Link>
    </div>
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
