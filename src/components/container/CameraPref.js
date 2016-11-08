'use strict';

import { connect } from 'react-redux';
import CameraPref from '../presentation/CameraPref.js';
import { switchCamera } from '../../actionCreator/actionCreator';

const mapStateToProps = (state) => {
    return {
        cameraId: state.cameraId,
        cameras: state.cameras
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (option) => {
            dispatch(switchCamera(option.value))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraPref);
