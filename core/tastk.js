const cron = require('node-cron');
const {saveData} = require('./buildData.js');

const job = async () => {
    cron.schedule('0 0 * * * *', () => {
        saveData();
        console.log('Data generate from cron-job');
    });
}

module.exports = job;