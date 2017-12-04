import React from 'react';

import './nav.css';

export default function Nav(props) {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="/meals">week</a></li>
        <li><a href="/meals">day</a></li>
        <li><a href="/groceries">grocery list</a></li>
      </ul>
    </nav>
  );
};
