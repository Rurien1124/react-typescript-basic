import axios from 'axios';

export const jsonPlaceholderRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: false,
  timeout: 3000,
});

jsonPlaceholderRequest.interceptors.request.use(
  (config) => {
    console.log('요청 전 수행 작업');

    return config;
  },
  (error) => {
    console.log('오류 시 수행 작업');
    return Promise.reject(error);
  }
);
