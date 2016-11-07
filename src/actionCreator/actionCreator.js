'use strict';

const actionCreator =  {
    switchCamera: function(id) {
        return {
            type: 'SWITCH_CAMERA',
            payload: {
                cameraId: id
            }
        }
    },
    listCameras: () => {
        return {
            type: 'CAMERA_LIST',
            payload: new Promise(function (resolve, reject) {
                if (MediaStreamTrack.getSources) {
                    MediaStreamTrack.getSources(resolve, reject)
                } else {
                    throw new Error('Navigator does not implement MediaStreamTrack.getSources');
                }
            })
        }
    }
};

export default actionCreator;