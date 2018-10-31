// 卡券类型 aiqiyi  wangyikaola  youku  wangyiyanxuan  yunifang  laiyifen  tianyishixun
const translateCouponType = (val, type) => {
    const map = {
        default: {
            name: '感谢使用翼支付骑车',
            name_en: '',
            desc: '小小心意请笑纳',
            link: ''
        },
        M01001: {
            name: '网易严选降温喷雾',
            name_en: 'wangyiyanxuan',
            desc: '0元购',
            link: ''
        },
        M01002: {
            name: '网易考拉蕉下防晒伞',
            name_en: 'wangyikaola',
            desc: '60元券',
            link: 'https://0x9.me/89WST'
        },
        M01003: {
            name: '来伊份满88元立减',
            name_en: 'laiyifen',
            desc: '20元券',
            link: 'm.laiyfen.com'
        },
        M01004: {
            name: '天翼视讯VIP会员',
            name_en: 'tianyishixun',
            desc: '7天券',
            link: 'h.tv189.com/yzfdl'
        }
    };
    if (type && type === 'en') {
        return map[val].name_en;
    }
    return map[val] || map.default;
};

module.exports = {
    translateCouponType
};
