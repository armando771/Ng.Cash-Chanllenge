import axios from 'axios';

const api = axios.create({
    baseURL: process.env.APP_API_URL, 
    headers: {
        'Content-Type': 'application/json',
        Accept: 'json',
    }
});

export default api;
