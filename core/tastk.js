const CronJob = require('cron').CronJob;
const {saveData} = require('./buildData.js');

const job = new CronJob(
    '1 0 * * * *',
    saveData,
    null,
    false,
    'America/Santiago'
);

module.exports = job;