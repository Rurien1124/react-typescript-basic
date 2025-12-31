import axios from 'axios';

const defaultRequestConfig = {
  withCredentials: false,
  timeout: 3000,
};

export const jsonPlaceholderRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  ...defaultRequestConfig,
});

jsonPlaceholderRequest.interceptors.request.use(
  (config) => {
    console.log('요청 전 수행 작업');

    return config;
  },
  (error) => {
    console.error('요청 오류 시 수행 작업');
    return Promise.reject(error);
  }
);

jsonPlaceholderRequest.interceptors.response.use(
  (response) => {
    console.log('응답 데이터 가공');
    return response;
  },
  (error) => {
    console.error('응답 오류 시 수행 작업');
    return Promise.reject(error);
  }
);
