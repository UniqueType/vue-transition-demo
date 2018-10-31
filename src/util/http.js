/* eslint no-bitwise: "off" */
/* eslint no-undef: "off" */
// const locationUrl = window.location.host.toLowerCase();
const url = '';
exports.url = url;
// 可添加一些公用参数
exports.buildParams = (params) => {
    console.log(params);
    this.$ajax('methods', {}, (res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });
};
