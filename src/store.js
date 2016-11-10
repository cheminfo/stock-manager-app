'use strict';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer.js';
import promiseMiddleware from 'redux-promise-middleware';
import { listCameras } from './actions/camera';
import { persistStore, autoRehydrate } from 'redux-persist';

const composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore);

const store = composeStoreWithMiddleware(
    reducer,
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
debugger;
persistStore(store, {
    blacklist: ['cameras'],
    debounce: 200
}, () => {
    console.log('rehydration complete')
});

// Initialization actions
store.dispatch(listCameras());
export default store;