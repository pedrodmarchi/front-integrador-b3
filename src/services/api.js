import axios from 'axios';

const api = axios.create({
  baseURL: 'ec2-34-239-134-166.compute-1.amazonaws.com:8080'
});

export default api;