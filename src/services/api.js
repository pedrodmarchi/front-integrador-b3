import axios from 'axios';

const api = axios.create({
  baseURL: ' ec2-3-87-208-200.compute-1.amazonaws.com:8080'
});

export default api;