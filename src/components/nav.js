import React from 'react';

import './nav.css';

export default function Nav(props) {
  return (
    <nav role="navigation">
      <ul class="nav-list">
        <li><a href="">week</a></li>
        <li><a href="">day</a></li>
        <li><a href="/groceries">grocery list</a></li>
      </ul>
    </nav>
  );
};
