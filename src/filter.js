exports.yuan2fen = (value) => {
    let tmp = value || 0;
    tmp = parseInt(tmp, 10);
    tmp /= 100;
    return tmp.toFixed(2);
};

exports.dateFormat = (date, fmt) => {
    const value = `${date}`;
    console.log(`${value}${fmt}`);
    const year = parseInt(value.substr(0, 4), 10);
    const o = {
        'M+': parseInt(value.substr(5, 2), 10), // 月份
        'd+': parseInt(value.substr(8, 2), 10), // 日
        'h+': parseInt(value.substr(11, 2), 10), // 小时
        'm+': parseInt(value.substr(14, 2), 10), // 分
        's+': parseInt(value.substr(17, 2), 10) // 秒
    };
    let tmpFmt = fmt;
    if (/(y+)/.test(tmpFmt)) {
        tmpFmt = tmpFmt.replace(RegExp.$1, (`${year}`).substr(4 - RegExp.$1.length));
    }
    const keys = Object.keys(o);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (new RegExp(`(${k})`).test(tmpFmt)) {
            const len = `${o[k]}`.length;
            tmpFmt = tmpFmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr(`${len}`)));
        }
    }
    return tmpFmt;
};
exports.ymdStr = (date) => {
    let newDate = '';
    if (date.length >= 8) {
        const year = date.substr(0, 4);
        const month = date.substr(5, 2);
        const day = date.substr(8, 2);
        newDate = `${year}.${month}.${day}`;
    }
    return newDate;
};
