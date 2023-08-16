import express from 'express';
import cors from 'cors';
import job from './core/tastk.js';
import { saveData } from "./core/buildData.js";
import horoscopeRoutes from './routes/horoscopo.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://uncodigo.com/',
    method: 'GET'
}))

app.use('/', horoscopeRoutes);

app.listen(port, async () => {
    console.log(`Este servicio está en http://localhost:${port}`)
    job();
    await saveData();
});