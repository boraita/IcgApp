import axios from 'axios';
import {GlobalConfig} from 'core/config/global';
import persistence from './persistence';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_REACT_APP + ':' +process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_BASE_API,
  withCredentials: true,
  headers: {
    'Accept': GlobalConfig.DEFAULT_CONTENT_TYPE,
    'Content-Type': GlobalConfig.DEFAULT_CONTENT_TYPE,
  },
});

axiosConfig.interceptors.request.use(
    (config) => config,
    (error) => {
      if (error.response.status === 401) {
        persistence.setLogout();
      }
      return Promise.reject(error);
    });

axiosConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response?.status) {
        case 401:
          persistence.setLogout();
          break;
        case 403:
        // eslint-disable-next-line no-alert
          alert(`Error with status: ${error.response.status} and message: ${error.message}`);
          break;

        default:
          break;
      }
      return Promise.reject(error);
    },
);

export default axiosConfig;
