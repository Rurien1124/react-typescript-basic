import axios from 'axios';

const defaultRequestConfig = {
  withCredentials: false,
  timeout: 3000,
};

export const dogApiRequest = axios.create({
  baseURL: 'https://api.thedogapi.com/v1/',
  ...defaultRequestConfig,
});

dogApiRequest.interceptors.request.use(
  (config) => {
    console.log('Prepare dogs ...');

    return config;
  },
  (error) => {
    console.error("Can't prepare dogs");
    return Promise.reject(error);
  }
);

dogApiRequest.interceptors.response.use(
  (response) => {
    console.log('Processing dogs ...');
    return response;
  },
  (error) => {
    console.error("Can't process dogs");
    return Promise.reject(error);
  }
);
