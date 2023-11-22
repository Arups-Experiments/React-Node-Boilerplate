import React from 'react';
import ReactDom from 'react-dom';
import StopWatch from './components/StopWatch/StopWatch.js';
import Users from './components/Users/FetchUsers.js';
import 'normalize.css';

ReactDom.render(
  <React.Fragment>
    <StopWatch />
    <Users />
  </React.Fragment>,
  document.getElementById('container')
);
