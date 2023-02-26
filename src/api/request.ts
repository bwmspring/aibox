import axios, { AxiosInstance } from 'axios';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;
console.log('BASE_PREFIX: ', BASE_PREFIX);
const instance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  // timeout: 1000 * 300,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    console.error(`请求错误 ${response.statusText}: ${response}`);
    return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    console.error(message);
    return Promise.reject(error);
  },
);


export const request = async (url: string, params: any = {}) => {
  if (!params.context) {
    params.context = {
      token: decodeURIComponent(''),
      appKey: '',
      appSec: '',
    }
  }
  return instance.post(url, params);
};
