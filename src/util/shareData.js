/* eslint no-undef: "off" */
/* eslint guard-for-in: "off" */
/* eslint no-restricted-syntax: ["off", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
/* eslint no-unused-vars: "off" */

exports.sessionSet = (key, val) => {
    sessionStorage.setItem(key, JSON.stringify(val));
};

exports.sessionGet = (key) => {
    const val = sessionStorage.getItem(key);
    return JSON.parse(val);
};

exports.storageSet = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

exports.storageGet = (key) => {
    const val = localStorage.getItem(key);
    return JSON.parse(val);
};

exports.storageRemove = (key) => {
    localStorage.removeItem(key);
};

exports.sessionRemove = (key) => {
    sessionStorage.removeItem(key);
};

// base64编码
exports.jsonToBase64 = (Jdata) => {
    const jsonData = new Buffer(JSON.stringify(Jdata)).toString('base64');
    return jsonData;
};
