import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
