import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './nav';
import './header.css';

export default function Header(props) {
  const pathname = window.location.pathname;

  return (
    <header role="banner" className="header">
      <div className="header-container">
        <div className="col-6 header-content">
          <Link to='/' className="main-logo desktop-left">Simply Planned</Link>
        </div>

        <div className="col-6 header-content mobile-short-height">
          <Nav  pathname={pathname}/>
        </div>
      </div>
    </header>
  );
};
