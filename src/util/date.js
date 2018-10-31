const format = (date, fmt) => {
    const year = date.getFullYear();
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
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
// let formatDate = (date) => {
//    let year = date.getFullYear().toString();
//    let mouth = date.getMonth().toString();
//    let dateString = year + '年' + mouth + '月';
//    return dateString;
// };

const strToDate = (str) => {
    console.log(`current string: ${str}`);
    return new Date();
};
const addDate = (date, days) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    let day = d.getDate();
    let m = d.getMonth() + 1;
    if (m < 10) {
        m = `0${m}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    const dateText = `${d.getFullYear()}-${m}-${day}`;
    return dateText;
};
const prevMonth = (date, months) => {
    const d = new Date(date);
    const m = d.getMonth() + 1;
    let y = d.getFullYear();
    let prevM = 0;
    let mm = 0;
    if (m < 4) {
        prevM = (m + 12) - months;
    } else {
        prevM = m - months;
    }
    console.log(prevM);
    if (prevM > 12) {
        y = d.getFullYear() + 1;
        mm = prevM;
        prevM = mm - 12;
    }

    if (prevM < 10) {
        prevM = `0${prevM}`;
    }

    const dateText = `${y}-${prevM}-${d.getDate()}`;
    return dateText;
};
const dateDiff = (newDate, startDate) => {
    const newDates = new Date(newDate);
    const startDates = new Date(startDate);
    const minutesDiff = startDates.getTime() - newDates.getTime(); // 时间差的毫秒数
    // 计算出相差天数
    const days = Math.floor(minutesDiff / (24 * 3600 * 1000));
    const leave1 = minutesDiff % (24 * 3600 * 1000);  // 计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000));
    const timeDiff = {
        day: days,
        hour: hours
    };
    return timeDiff;
};
const getYyyyMMddmmss = (time) => { // 获取时间格式yyyyMMddmmss
    let d;
    if (!time) {
        d = new Date();
    } else {
        d = time;
    }
    let month = d.getMonth() + 1; // 本月
    month = (month < 10 ? `0${month}` : month);
    const year = d.getFullYear();
    const day = d.getDate() > 9 ? d.getDate() : (`0${d.getDate()}`);
    const hour = d.getHours() > 9 ? d.getHours() : (`0${d.getHours()}`);
    const minit = d.getMinutes() > 9 ? d.getMinutes() : (`0${d.getMinutes()}`);
    const sec = d.getSeconds() > 9 ? d.getSeconds() : (`0${d.getSeconds()}`);
    return `${year}-${month}-${day} ${hour}:${minit}:${sec}`;
};
const getCurrHourMinute = () => { // 获取时间点，时分 5：25
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return { h: hour, m: minute };
};
/* eslint no-mixed-operators: "error" */
// 根据时间点2：20获取对应的人数范围
// 0：00-6：00，22：30-24：00【500-700】 0，30
// 6:00-6:30 22:00-22:30 [700-1000] 1 29
// 6:30-7:00 21:30-22:00 [1000-3000] 2 28
// 7:00-7:30 15:00-16:30 [3000-5000] 3 19
// 7:30-8:00 14:00－14:30 [5000-8000] 4 17
// 8:00-8:30 10:00-10:30 11:00-11:30 13:00-13:30 17:30-18:00 18:30-19:00 [8000-10000] 5 9 11 15 22 24
// 8:30-9:00, 9:30-10:00 11:30-12:00 12:30-13:00 18:00-18:30 [10000-12000] 6 8 12 14 23
// 9:00-9:30 12:00-12:30 [12000-14000] 7 13
// 10:30-11:00 17:00-17:30 19:00-19:30 [6000-8000] 10 21 25
// 13:30-14:00 [7000-9000] 16
// 14:30-15:00 [5000-7000] 18
// 16:30-17:00 [5000-6000] 20
// 19:30-20:00 [4000-6000] 26
// 20:00-21:30 [2000-4000] 27
// 9:30-11:30  13:30-17:30  20:00-22:00【1000，10000】
const dealTimeArr = (hm) => {
    let range = [];
    // const hmArr = [{ h: 0, m: 0 }, { h: 6, m: 0 }, { h: 6, m: 30 }, { h: 7, m: 0 }, { h: 7, m: 30 }, { h: 8, m: 0 }, { h: 8, m: 30 }, { h: 9, m: 0 }, { h: 9, m: 30 }, { h: 10, m: 0 }, { h: 10, m: 30 }, { h: 11, m: 0 }, { h: 11, m: 30 }, { h: 12, m: 0 }, { h: 12, m: 30 }, { h: 13, m: 0 }, { h: 13, m: 30 }, { h: 14, m: 0 }, { h: 14, m: 30 }, { h: 15, m: 0 }, { h: 16, m: 30 }, { h: 17, m: 0 }, { h: 17, m: 30 }, { h: 18, m: 0 }, { h: 18, m: 30 }, { h: 19, m: 0 }, { h: 19, m: 30 }, { h: 20, m: 0 }, { h: 21, m: 30 }, { h: 22, m: 0 }, { h: 22, m: 30 }, { h: 24, m: 0 }];
    const hmArr = [{ h: 0, m: 0 }, { h: 6, m: 0 }, { h: 6, m: 30 }, { h: 6, m: 45 }, { h: 7, m: 0 }, { h: 7, m: 15 }, { h: 7, m: 30 }, { h: 7, m: 45 }, { h: 8, m: 0 }, { h: 8, m: 15 }, { h: 8, m: 30 }, { h: 8, m: 45 }, { h: 9, m: 0 }, { h: 9, m: 15 }, { h: 9, m: 30 }, { h: 9, m: 45 }, { h: 10, m: 0 }, { h: 10, m: 15 }, { h: 10, m: 30 }, { h: 10, m: 45 }, { h: 11, m: 0 }, { h: 11, m: 15 }, { h: 11, m: 30 }, { h: 11, m: 45 }, { h: 12, m: 0 }, { h: 12, m: 15 }, { h: 12, m: 30 }, { h: 12, m: 45 }, { h: 13, m: 0 }, { h: 13, m: 15 }, { h: 13, m: 30 }, { h: 13, m: 45 }, { h: 14, m: 0 }, { h: 14, m: 15 }, { h: 14, m: 30 }, { h: 14, m: 45 }, { h: 15, m: 0 }, { h: 15, m: 15 }, { h: 15, m: 30 }, { h: 15, m: 45 }, { h: 16, m: 0 }, { h: 16, m: 15 }, { h: 16, m: 30 }, { h: 16, m: 45 }, { h: 17, m: 0 }, { h: 17, m: 15 }, { h: 17, m: 30 }, { h: 17, m: 45 }, { h: 18, m: 0 }, { h: 18, m: 15 }, { h: 18, m: 30 }, { h: 18, m: 45 }, { h: 19, m: 0 }, { h: 19, m: 15 }, { h: 19, m: 30 }, { h: 19, m: 45 }, { h: 20, m: 0 }, { h: 20, m: 15 }, { h: 20, m: 30 }, { h: 20, m: 45 }, { h: 21, m: 0 }, { h: 21, m: 15 }, { h: 21, m: 30 }, { h: 21, m: 45 }, { h: 22, m: 0 }, { h: 22, m: 15 }, { h: 22, m: 30 }, { h: 24, m: 0 }];
    let res = 0;
    // hmArr.length 68
    for (let i = 0; i < hmArr.length; ++i) {
        if (hmArr[i].h > hm.h) {
            res = i > 0 ? i - 1 : i;
            break;
        } else if (hmArr[i].h === hm.h) {
            if (hmArr[i].m >= hm.m) {
                res = i > 0 ? i - 1 : i;
                break;
            }
        }
    }
    // const rangeArr = [{ index: [0, 30], range: [500, 700] }, { index: [1, 29], range: [700, 1000] }, { index: [2, 28], range: [1000, 3000] }, { index: [3, 19], range: [3000, 5000] }, { index: [4, 17], range: [5000, 8000] }, { index: [5, 9, 11, 15, 22, 24], range: [8000, 10000] }, { index: [6, 8, 12, 14, 23], range: [10000, 12000] }, { index: [7, 13], range: [12000, 14000] }, { index: [10, 21, 25], range: [6000, 8000] }, { index: [16], range: [7000, 9000] }, { index: [18], range: [5000, 7000] }, { index: [20], range: [5000, 6000] }, { index: [26], range: [4000, 6000] }, { index: [27], range: [2000, 4000] }];
    const rangeArr = [{ index: [66], range: [500, 700] }, { index: [0], range: [500, 1000] }, { index: [65], range: [700, 1000] }, { index: [64], range: [1000, 1500] }, { index: [1], range: [1200, 2000] }, { index: [2], range: [1500, 3500] }, { index: [63], range: [2000, 2500] }, { index: [62], range: [2500, 3000] }, { index: [61], range: [3000, 3500] }, { index: [60], range: [3000, 4000] }, { index: [3], range: [3500, 5000] }, { index: [4], range: [4000, 6000] }, { index: [59], range: [5000, 6000] }, { index: [36, 37, 38, 39, 40], range: [5000, 7000] }, { index: [35, 41, 42, 58], range: [6000, 7000] }, { index: [5, 19, 32, 33, 34], range: [6000, 8000] }, { index: [18, 31, 43, 57], range: [7000, 8000] }, { index: [17, 29, 30, 44], range: [8000, 9000] }, { index: [6, 56], range: [8000, 10000] }, { index: [20, 28, 45], range: [9000, 10000] }, { index: [7, 21, 27, 46], range: [10000, 11000] }, { index: [16, 22], range: [10000, 12000] }, { index: [8, 23, 26, 47, 54, 55], range: [11000, 12000] }, { index: [9, 15, 25, 48, 52, 53], range: [12000, 13000] }, { index: [14, 24], range: [12000, 14000] }, { index: [10, 49, 51], range: [13000, 14000] }, { index: [11, 13], range: [13000, 15000] }, { index: [50], range: [14000, 15000] }, { index: [12], range: [14000, 16000] }];
    for (let j = 0; j < rangeArr.length; ++j) {
        if (rangeArr[j].index.indexOf(res) > -1) {
            range = rangeArr[j].range;
        }
    }
    return range;
};
// 获取lowvalue和highvalue之间的随机数
const createRandom = (lowValue, highValue) => {
    const choice = (highValue - lowValue) + 1;
    return Math.floor((Math.random() * choice) + lowValue);
};
module.exports = {
    format,
    strToDate,
    addDate,
    prevMonth,
    dateDiff,
    getYyyyMMddmmss,
    getCurrHourMinute,
    dealTimeArr,
    createRandom
};
