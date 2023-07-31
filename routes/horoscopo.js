const express = require('express')
const router = express.Router()
const signos = require('../core/signosList');

const {getHoroscope, getHoroscopeBySigno} = require("../utils/horoscope.utils");

router.get('/', (req, res) => {
    res.json(getHoroscope());
});

router.get('/:signo', async (req, res) => {

    const {signo} = req.params;
    const isValidSigno = signos.includes(signo);

    if (isValidSigno) {
        const horoscope = getHoroscopeBySigno(signo)
        res.json(horoscope)
    } else {
        res.json({
            ok: false,
            error: 'El signo no existe'
        })
    }
});

module.exports = router;