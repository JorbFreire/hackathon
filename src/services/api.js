import axios from 'axios';

const api = axios.create({
  baseURL: "https://hackathon-mega-app-staging.herokuapp.com",
  responseType: "json"
});

export default api;
