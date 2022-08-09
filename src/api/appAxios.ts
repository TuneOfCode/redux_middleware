// -----------------------------------------------------------------------------
// This file contains an instance of axios with a custom config (axiosClient)
// and an axiosFetch singleton to make http requests (axiosFetch)
// -----------------------------------------------------------------------------

import axios, { AxiosRequestConfig } from "axios";
import { stringify } from "qs";

/**
 * Create a new instance of axios with a custom config
 * use need to set(STORAGE.JWT)
 */
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosClient.interceptors.request.use();
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status, data } = error.response;
    console.log(error.response);
    if (status === 400 || status === 401) {
      const error = data.message;
      throw new Error(error);
    }
    return Promise.reject(error);
  }
);

/**
 * Create a singleton for our base api
 */

class AxiosFetch {
  get(uri: string, params = {}) {
    const queryString = stringify(params);
    const uriWithQuery = queryString ? `${uri}&${queryString}` : `${uri}`;
    return axiosClient.get(uriWithQuery);
  }
  post(uri: string, body?: AxiosRequestConfig) {
    return axiosClient.post(uri, body);
  }
  put(uri: string, body?: AxiosRequestConfig) {
    return axiosClient.put(uri, body);
  }
  delete(uri: string, body?: AxiosRequestConfig) {
    return axiosClient.delete(uri, body);
  }
  patch(uri: string, body?: AxiosRequestConfig) {
    return axiosClient.patch(uri, body);
  }
}
const appAxios = new AxiosFetch();
export default appAxios;
