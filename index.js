import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/containers/App';
import { HashRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
     <App /> 
     {/* <Route path="/#/" component={App} /> */}
    </div>
  </Router>

, document.getElementById('root'));
