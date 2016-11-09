'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer/reducer.js';
import promiseMiddleware from 'redux-promise-middleware';

const composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore);

const store = composeStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;