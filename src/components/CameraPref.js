'use strict';

import { connect } from 'react-redux';
import { switchCamera } from '../actions/camera';
import Select from 'react-select';
import React, { PropTypes } from 'react';

const CameraPref = ({cameras, onChange, value}) => {
    var options = cameras.map((camera, idx) => ({
        label: camera.label || ('Camera ' + (idx + 1)),
        value: camera.id
    }));
    console.log(options);
    return (
        <Select options={ options } clearable={false} onChange={onChange.bind(this)} name="dropdown-camera-list" value={value}>
        </Select>
    );
};
CameraPref.defaultProps = {
    cameras: [],
    onChange: () => {}
};

CameraPref.propTypes = {
    cameras: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
    return {
        value: state.cameraId,
        cameras: state.cameras
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (id) => {
            dispatch(switchCamera(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraPref);
