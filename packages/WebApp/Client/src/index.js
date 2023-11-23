import React from 'react';
import ReactDom from 'react-dom';
import StopWatch from './components/StopWatch/StopWatch.js';
import Users from './components/Users/FetchUsers.js';
import Timer from './components/Timer/Timer.js';
import 'normalize.css';

ReactDom.render(
  <React.Fragment>
    <Timer />
  </React.Fragment>,
  document.getElementById('container')
);
