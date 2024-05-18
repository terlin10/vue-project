/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import type { AxiosResponse } from 'axios';

axios.defaults.headers.common.Host = import.meta.env.VITE_HOST;

const commonAxiosInstance = axios.create();
commonAxiosInstance.interceptors.response.use(
    (res) => {
        if (!res.data.error) {
            return res.data.data;
        }

        return Promise.reject(new Error(res.data.info || 'Error'));
    },
    (err) => Promise.reject({
        message: err.response?.data?.info || 'Error',
        code: err.response?.data?.code || null
    })
);

interface AxiosRequest {
    <T = AxiosResponse>(this: any, method: string, url: string, data?: object, config?: object): Promise<T>
}

const axiosRequest: AxiosRequest = function (method: string, url: string, data: object = {}, config: object = {}) {
    switch (method.toLowerCase()) {
        case 'post':
            return commonAxiosInstance.post(url, data, config);
        case 'delete':
            return commonAxiosInstance.delete(url, { data, ...config });
        case 'put':
            return commonAxiosInstance.put(url, data, config);
        case 'patch':
            return commonAxiosInstance.patch(url, data, config);
        default:
            return commonAxiosInstance.get(url, { params: data, ...config });
    }
};

export { commonAxiosInstance, axiosRequest };
