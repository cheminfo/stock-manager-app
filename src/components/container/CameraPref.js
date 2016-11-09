'use strict';

import { connect } from 'react-redux';
import CameraPref from '../presentation/CameraPref.js';
import { switchCamera } from '../../actionCreator/actionCreator';

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
