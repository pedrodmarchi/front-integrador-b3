import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-35-174-165-95.compute-1.amazonaws.com:8080'
});

export default api;