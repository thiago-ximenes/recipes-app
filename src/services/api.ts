import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-receitas9.herokuapp.com/receitas/',
});

export default api;
