import axios from 'axios';
const api = axios.create({
  baseURL: 'http://10.58.148.107:3000',
});

export default api;
