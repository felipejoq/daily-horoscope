import express from 'express';
import signos from '../core/signosList.js'
import { Horoscope } from '../models/Horoscope.js';

const horoscopeRoutes = express.Router()

horoscopeRoutes.get('/', async (req, res) => {
    res.json(await Horoscope.getAll());
});

horoscopeRoutes.get('/:signo', async (req, res) => {

    const {signo} = req.params;
    const isValidSigno = signos.includes(signo);

    if (isValidSigno) {
        res.json(await Horoscope.getBySigno(signo))
    } else {
        res.status(404).json({
            ok: false,
            error: 'El signo no existe'
        })
    }
});

export default horoscopeRoutes;