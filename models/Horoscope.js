import { checkDataExist } from '../core/buildData.js';
import { getJsonHoroscope } from '../utils/horoscope.utils.js';

const genericMessage = {
    ok: false,
    message: 'El servicio está obteniendo y creando los datos, por favor espere un momento y refresque la página.'
}

export class Horoscope {
    static async getAll() {
        if (checkDataExist()) {
            return await getJsonHoroscope();
        } else {
            return genericMessage;
        }
    }
    
    static async getBySigno(signo) {
        if (checkDataExist()) {
            const data = await getJsonHoroscope();
            return data.find(item => item.signo === signo.toLowerCase());
        } else {
            return genericMessage;
        }
    }
}