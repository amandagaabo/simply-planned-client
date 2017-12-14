import React from 'react';
import {Link} from 'react-router-dom';

import Nav from './nav';
import './header.css';

export default function Header(props) {
  return (
    <header role="banner">
      <div className="row">
        <div className="col-6 header-content">
          <Link to="/dashboard" className="main-logo desktop-left">Simply Planned</Link>
        </div>

        <div className="col-6 header-content mobile-short-height">
          <Nav />
        </div>
      </div>
    </header>
  );
};
