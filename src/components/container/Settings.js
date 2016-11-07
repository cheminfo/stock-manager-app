'use strict';

import React from 'react';
// import Login from './Login.js';
import CameraPref from './CameraPref.js';

export default class Settings extends React.component {
    render() {
        return (
            <div>
                <CameraPref choice={ cameraChoice }/>
            </div>
        )
    }
}
