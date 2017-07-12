import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//configure redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from'redux'
import thunk from 'redux-thunk'
import marvelApp from './reducers'


//created store where we pass are reducers.  Middleware needed adding functions to store
let store = createStore(marvelApp, applyMiddleware(thunk))

//injecting store so app know where is located
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
