'use strict';

function newQRcode(qrCode) {
    return {
        type: 'NEW_QR_CODE',
        payload: qrCode
    }
}

export {newQRcode};