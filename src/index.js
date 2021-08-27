import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// NOTE: hash or memory routing is needed for Chrome extensions to work properly
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
