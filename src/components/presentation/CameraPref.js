'use strict';

import React, { PropTypes } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
class CameraPref extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log('render', this.props.cameras);
        var menuItems = [];
        for (let i = 0; i < this.props.cameras.length; i++) {
            let camera = this.props.cameras[i];
            menuItems.push(<MenuItem key={ camera.id } eventKey={ camera.id }>{ camera.label || ('Camera ' + (i + 1)) }</MenuItem>)
        }
        console.log(menuItems)
        return (
                <DropdownButton onSelect={this.props.onSelect.bind(this)} id="dropdown-camera-list" title="Camera choice">
                    { menuItems }
                </DropdownButton>
        );
    }
}

CameraPref.defaultProps = {
    cameras: [],
    onSelect: () => {}
};

CameraPref.propTypes = {
    cameras: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};
export default CameraPref;