import React from 'react';
import Nav from './nav';

import './header.css';

export default function Header(props) {
  return (
    <header role="banner">
      <div className="row">
        <div className="col-6 header-content">
          <a href="/" className="main-logo">Simply Planned</a>
        </div>

        <div className="col-6 header-content">
          <Nav />
        </div>
      </div>
    </header>
  );
};
