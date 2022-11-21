import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/', 
    headers: {
        'Content-Type': 'application/json',
        Accept: 'json',
        'Authorization': localStorage.getItem('token')
    }
});

export default api;
