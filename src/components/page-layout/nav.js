import React from 'react';
import {connect} from 'react-redux';

import './nav.css';

export function Nav(props) {
  if (props.isLoggedIn) {
    return (
      <nav>
        <ul className="nav-list">
          <li><a href="/meals">My Plan</a></li>
          <li><a href="/">Log Out</a></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className="nav-list">
          <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
    );
  }
};

export const mapStateToProps = state => ({
  //isLoggedIn: state.auth.currentUser !== null
  isLoggedIn: state.app.sessions.user !== null
});

export default connect(mapStateToProps)(Nav);
