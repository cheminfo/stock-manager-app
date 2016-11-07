'use strict';

import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
class CameraPref extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log('render', this.list);
        var menuItems = [];
        for (let i = 0; i < this.props.cameras.length; i++) {
            let camera = this.props.cameras[i];
            menuItems.push(<MenuItem key={this.list[i].id} eventKey={camera.id}>{this.list[i].label || camera[i].id}</MenuItem>)
        }
        return (
                <DropdownButton onSelect={this.props.onSelect.bind(this)} id="CameraSelect" title="Camera choice">
                    { menuItems }
                </DropdownButton>
        );
    }
}


CameraPref.propTypes = {
    cameras: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};
export default CameraPref;