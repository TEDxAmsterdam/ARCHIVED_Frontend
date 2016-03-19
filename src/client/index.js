import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/configureStore';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../common/routes';

const initialState = window.__INITIAL_STATE__;
const logger = __DEBUG__ ? require('redux-logger')({collapsed: true, timestamp: false, logger: console}) : null;
const store = configureStore(initialState, {routes, logger});
const history = syncHistoryWithStore(browserHistory, store);

if(__PERFORMANCE__) {
  window.Perf = require('react-addons-perf');
}

if(__DEBUG__) {
  // For use of React Developer Tools
  window.React = React;
}

ReactDOM.render(<Provider store={store}><Router history={history}>{routes}</Router></Provider>, document.querySelector('main'));
