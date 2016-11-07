'use strict';

const initialStore = {
    cameras: []
};

export default function reducer(store=initialStore, action) {
    switch(action.type) {
        case 'CAMERA_CHANGED':
            return Object.assign({}, store, {cameraId: action.payload});
        case 'CAMERA_LIST_FULFILLED': {
            return Object.assign({}, store, {cameras: action.payload});
        }
        case 'CAMERA_LIST_PENDING':
        case 'CAMERA_LIST_REJECTED':
            return Object.assign({}, store, {cameras: []});
        default: {
            return store;
        }
    }
}