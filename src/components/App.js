'use strict';

import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {BrowserRouter, Link, Router, Route, browserHistory, Match, Miss} from 'react-router';
import {render} from 'react-dom';
import Settings from './presentation/CameraPref.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/reducer.js';
import actionCreator from '../actionCreator/actionCreator';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(reducer, applyMiddleware(promiseMiddleware));
const routePrefix = '';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};

        // Do some initialization stuff
        // get list of cameras
        store.dispatch(actionCreator.listCameras());
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Menu width={ 200 }>
                            <Link id="home" to={`${routePrefix}/`}>Home</Link>
                            <Link id="settings" to={`${routePrefix}/settings`}>Settings</Link>
                        </Menu>
                        <Match exactly pattern="/stock/" render={() => (
                            <h1>Welcome</h1>
                        )}/>
                        <Match pattern={`${routePrefix}/settings`} component={Settings}/>
                        <Miss render={() => (
                            <h1>Missing</h1>
                        )}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;