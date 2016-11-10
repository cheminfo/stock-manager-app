'use strict';

import React, { PropTypes } from 'react';
import {newQRcode} from '../actions/QRcode';
import {connect} from 'react-redux';

class QRReader extends React.Component {
    constructor() {
        super();
        this.state = {};

    }


    startStream(cameraId) {
        var width = 1280;
        var height = 720;
        var crop = 300;
        if (this.stream) {
            return;
        }
        console.log('start stream')
        var constraints = {
            video: {
                mandatory: {
                    minWidth: width,
                    minHeight: height
                },
                optional: [{
                    sourceId: cameraId
                }]
            }
        };

        const successCallback = (stream) => {
            this.stream = stream; // make stream available to console
            this.videoSrc = window.URL.createObjectURL(stream)
            this.setState({
                video: true
            });
        };
        const errorCallback = (error) => {
            console.log('navigator.getUserMedia error: ', error);
        };
        navigator.getUserMedia(constraints, successCallback, errorCallback);

    }

    componentDidMount() {
    }

    render() {
        console.log('render')
        if(!this.props.cameraId) return null;
        if(!this.stream) {
            this.startStream(this.props.cameraId);
        }
        if(!this.state.video) return null;
        var el = document.createElement('video');

        return (
            <div>
                <video id="vid" muted autoplay src={this.videoSrc}></video>
            </div>
        );
    }
}

QRReader.PropTypes = {
    cameraId: PropTypes.string.isRequired,
    onQRcode: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        cameraId: state.cameraId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQRcode: (qrcode) => {
            dispatch(newQRcode(qrcode))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QRReader);
