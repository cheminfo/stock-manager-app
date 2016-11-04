'use strict';

import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {BrowserRouter, Link, Router, Route, browserHistory, Match, Miss} from 'react-router';
import {render} from 'react-dom';
import About from './About.js';

const routePrefix = '/stock';

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

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
                    <Menu styles={ menuStyles }>
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