import fs from 'node:fs';
import { getAllHoroscope } from './horoscope.js';

export const checkDataExist = async () => {
    return fs.existsSync("./data/horoscope.json");
}

export const saveData = async () => {
    const horoscope = await getAllHoroscope();
    fs.writeFile(
        './data/horoscope.json',
        JSON.stringify(horoscope),
        null,
        (err) => {
            if (err) console.log('Error al escribir el archivo');
        }
    );
    console.log('Data was created')
}
