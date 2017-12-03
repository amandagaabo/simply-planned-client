import React from 'react';

import './header.css';

export default function Header(props) {
  return (
    <header role="banner">
      <div class="row">
        <div class="col-6 header-content">
          <a href="/" id="logo">Simply Planned</a>
        </div>

        <div class="col-6 header-content">
          <a href="" id="log-in">Log In</a>
        </div>
      </div>
    </header>
  );
};
