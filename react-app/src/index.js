// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import provider from 'react-redux';
import store from './Components/Redux/plainRedux/store';
import App from './App';

//Update the main entry point
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </provider>
);
