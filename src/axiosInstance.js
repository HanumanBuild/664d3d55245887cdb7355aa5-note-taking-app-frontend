import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NOTE_TAKING_APP_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
