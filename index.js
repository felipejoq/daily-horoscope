const express = require('express');
const cors = require('cors');
const job = require('./core/tastk')
const {saveData} = require("./core/buildData");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://uncodigo.com/',
    method: 'GET'
}))

app.use('/', require('./routes/horoscopo'));

app.listen(port, async () => {
    console.log(`Este servicio está en http://localhost:${port}`)
    job();
    await saveData();
});