import React from 'react';

import './header.css';

export default function Header(props) {
  return (
    <header role="banner">
      <div className="row">
        <div className="col-6 header-content">
          <a href="/" id="logo">Simply Planned</a>
        </div>

        <div className="col-6 header-content">
          <a href="" id="log-in">Log In</a>
        </div>
      </div>
    </header>
  );
};
