const { checkDataExist } = require("../core/buildData");

const genericMessage = {
    ok: false,
    message: 'El servicio está obteniendo y creando los datos, por favor espere un momento y refresque la página.'
}

const getHoroscope = () => {
    if (checkDataExist()) {
        return require('../data/horoscope.json');
    } else {
        return genericMessage;
    }
}

const getHoroscopeBySigno = (signo) => {
    if (checkDataExist()) {
        const data = require('../data/horoscope.json');
        return data.find(item => item.signo === signo.toLowerCase());
    } else {
        return genericMessage;
    }
}

module.exports = {
    getHoroscope,
    getHoroscopeBySigno
}