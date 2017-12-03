import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Header from './header';

import './app.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}
