'use strict';

import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {BrowserRouter, Link, Router, Route, browserHistory, Match, Miss} from 'react-router';
import {render} from 'react-dom';
import Settings from './Settings';
import QRreader from './QRreader';
import { Provider } from 'react-redux';
import store from '../store';

const routePrefix = '';

class App extends React.Component {
    constructor() {
        super();
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
                            <Link id="QR code reader" to={`${routePrefix}/qrcodeReader`}>QR code reader</Link>
                        </Menu>
                        <Match exactly pattern="/stock/" render={() => (
                            <h1>Welcome</h1>
                        )}/>
                        <Match pattern={`${routePrefix}/settings`} component={Settings}/>
                        <Match pattern={`${routePrefix}/qrcodeReader`} component={QRreader}/>
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