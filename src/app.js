'use strict';

import {createElement} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

let loc = window.location;
let hash = loc.hash.slice(1);
if (!hash) {
    hash = 'main';
}

let props = {
    location: loc,
    origin: loc.origin,
    path: hash
};

let element = createElement(App, props);
ReactDOM.render(element, document.getElementById('stock-manager'));
