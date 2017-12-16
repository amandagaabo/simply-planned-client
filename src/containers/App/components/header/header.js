import React from 'react';

import Nav from './nav';
import './header.css';

export default function Header(props) {
  return (
    <header role="banner">
      <div className="row">
        <div className="col-6 header-content">
          <h1 className="main-logo desktop-left">Simply Planned</h1>
        </div>

        <div className="col-6 header-content mobile-short-height">
          <Nav />
        </div>
      </div>
    </header>
  );
};
