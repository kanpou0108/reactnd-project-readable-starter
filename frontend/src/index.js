import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './redux/modules';
import './base.css';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({ ...reducers, form: formReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('root'),
);
