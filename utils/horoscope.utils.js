const {checkDataExist} = require("../core/buildData");

const getHoroscope = () => {
    if (checkDataExist()) {
        return require('../data/horoscope.json');
    } else {
        return {};
    }
}

const getHoroscopeBySigno = (signo) => {
    if (checkDataExist()) {
        const data = require('../data/horoscope.json');
        return data.find(item => item.signo === signo.toLowerCase());
    } else {
        return {};
    }
}

module.exports = {
    getHoroscope,
    getHoroscopeBySigno
}