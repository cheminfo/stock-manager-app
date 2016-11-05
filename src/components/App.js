'use strict';

import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {BrowserRouter, Link, Router, Route, browserHistory, Match, Miss} from 'react-router';
import {render} from 'react-dom';
import About from './About.js';

const routePrefix = '/stock';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu width={ 200 }>
                        <Link id="home"  to={`${routePrefix}/`}>Home</Link>
                        <Link id="about" to={`${routePrefix}/about`}>About</Link>
                    </Menu>
                    <Match exactly pattern="/stock/" render={() => (
                        <h1>Welcome</h1>
                    )}/>
                    <Match pattern="about$" component={About}/>
                    <Match pattern="/topics" component={About}/>
                    <Miss render={() => (
                        <h1>Missing</h1>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;