import fs from 'node:fs'
   
export const getJsonHoroscope = () => {
    return JSON.parse(fs.readFileSync('./data/horoscope.json'));
}