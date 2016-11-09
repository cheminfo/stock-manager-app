'use strict';

import React, { PropTypes } from 'react';
import Select from 'react-select';

class CameraPref extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log('render', this.props.cameras);
        var options = this.props.cameras.map((camera, idx) => ({
            label: camera.label || ('Camera ' + (idx + 1)),
            value: camera.id
        }));
        console.log(options);
        return (
                <Select options={ options } clearable={false} onChange={this.props.onChange.bind(this)} name="dropdown-camera-list" value={this.props.value}>
                </Select>
        );
    }
}

CameraPref.defaultProps = {
    cameras: [],
    onChange: () => {}
};

CameraPref.propTypes = {
    cameras: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};
export default CameraPref;