import React from 'react';
import ReactDom from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Users from '../src/components/UserListComponent';
import Dogs from '../src/components/DogListComponent';

ReactDom.render(
  <Provider store={store}>
    <Users />
    <Dogs />
  </Provider>,
  document.getElementById('container')
);
