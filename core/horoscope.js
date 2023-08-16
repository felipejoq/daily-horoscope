import * as cheerio from 'cheerio';
import { getData } from './getData.js';
import signos from './signosList.js';

const url = 'https://www.hola.com/horoscopo/';

export const getAllHoroscope = async () => {
    const horoscope = [];
    for (const signo of signos) {
        const item = await getHoroscopeBySigno(signo);
        horoscope.push(item);
    }
    return horoscope;
}

export const getHoroscopeBySigno = async (signo) => {
    const data = await getData(`${url}${signo}`);
    const $ = cheerio.load(data);
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