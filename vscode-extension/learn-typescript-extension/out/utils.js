"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let utils = {};
utils.randomString = (len = 20) => {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //去掉容易混淆字符
    let charSetLen = chars.length;
    let ret = '';
    for (let i = 0; i < len; i++) {
        ret += chars.charAt(Math.floor(Math.random() * charSetLen));
    }
    return ret;
};
exports.default = utils;
//# sourceMappingURL=utils.js.map