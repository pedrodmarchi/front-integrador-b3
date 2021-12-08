import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techstore-g5.herokuapp.com/'
});

export default api;