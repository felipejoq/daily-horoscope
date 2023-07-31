const fs = require('node:fs');
const {getAllHoroscope} = require('./horoscope');

const checkDataExist = () => {
    return fs.existsSync("./data/horoscope.json");
}

const saveData = async () => {
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

module.exports = {
    saveData,
    checkDataExist
};

