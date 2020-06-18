import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.38:3333'
    // baseURL: 'http://pi-u7c.anonymous.mobile.exp.direct:80'
    
});

export default api;