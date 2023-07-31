const axios = require('axios');
const https = require('node:https');

const agent = new https.Agent({
    rejectUnauthorized: false,
})

const getData = async (url) => {
    const response = await axios.get(url, {
        httpsAgent: agent,
    });
    return response.data;
}

module.exports = {
    getData
}