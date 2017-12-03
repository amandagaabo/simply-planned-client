import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import Header from './header';
import Login from './login';

import './app.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}
