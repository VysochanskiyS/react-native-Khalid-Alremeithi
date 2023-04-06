import axios from 'axios';

export const network = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-type': 'application/json',
  },
});
