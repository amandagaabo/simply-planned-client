import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './float-grid.css'
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
