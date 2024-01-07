import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {toast} from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}

const BASE_URL = 'https://13.design.pages.academy/wtw';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        const detailMessage = error.response.data;

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
