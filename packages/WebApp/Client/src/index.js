import React from 'react';
import ReactDom from 'react-dom/client';
import 'normalize.css';
import App from './components/Counter';

const root = ReactDom.createRoot(document.getElementById('container'));

root.render(
  <React.StrictMode>
    <React.Fragment>
      <App />
    </React.Fragment>
  </React.StrictMode>
);
