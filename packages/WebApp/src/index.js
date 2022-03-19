import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App.js';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
