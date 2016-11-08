'use strict';

function switchCamera(id) {
    return {
        type: 'SWITCH_CAMERA',
        payload: id
    }
}

function listCameras() {
    return {
        type: 'CAMERA_LIST',
        payload: new Promise(function (resolve, reject) {
            console.log('list cameras');
            if (MediaStreamTrack.getSources) {

                MediaStreamTrack.getSources(data => {
                    console.log('got sources', data)
                    return resolve(data.filter(d => d.kind === 'video').map(d => {
                        return {
                            id: d.id,
                            label: d.label
                        };
                    }));
                }, reject)
            } else {
                throw new Error('Navigator does not implement MediaStreamTrack.getSources');
            }
        })
    }
}

export {listCameras, switchCamera};
