import axios from 'axios';

const server = axios.create({
  baseURL: '/',
  'Content-Type': 'application/json',
});

export const getServer = () => server;
