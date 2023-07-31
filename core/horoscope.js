const cheerio = require('cheerio');
const {getData} = require('./getData.js');
const signos = require('./signosList');

const url = 'https://www.hola.com/horoscopo/';

const getAllHoroscope = async () => {
    const horoscope = [];
    for (const signo of signos) {
        const item = await getHoroscopeBySigno(signo);
        horoscope.push(item);
    }
    return horoscope;
}

const getHoroscopeBySigno = async (signo) => {
    const data = await getData(`${url}${signo}`);
    const $ = await cheerio.load(data);
    const sig = $("#titprev").find("span").text();
    const date = $("#resultados").find("strong").text();
    const paragraph = $("#resultados").find("p").text();

    return {
        signo: signo,
        title: sig,
        date: date,
        horoscope: paragraph
    }
}

module.exports = {
    getHoroscopeBySigno,
    getAllHoroscope
}