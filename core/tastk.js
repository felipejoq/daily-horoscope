import cron from 'node-cron';
import {saveData} from './buildData.js';

const job = async () => {
    cron.schedule('0 0 * * * *', () => {
        saveData();
        console.log('Data generate from cron-job');
    });
}

export default job;