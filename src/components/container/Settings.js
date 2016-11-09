'use strict';

import React from 'react';
// import Login from './Login.js';
import CameraPref from './CameraPref.js';

export default class Settings extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-container">
                <div className="header-space"></div>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Camera options</h4>
                        <CameraPref/>
                    </div>
                </div>
            </div>
        )
    }
}
