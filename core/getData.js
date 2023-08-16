import axios from 'axios';
import https from 'node:https';

const agent = new https.Agent({
    rejectUnauthorized: false,
})

export const getData = async (url) => {
    const response = await axios.get(url, {
        httpsAgent: agent,
    });
    return response.data;
}