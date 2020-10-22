import axios from 'axios';
import {serverAddress} from '../../sharedVariable';

export const loginAPI = (body) => {
  return axios.post(`${serverAddress}/auth/login`, body);
};
export const registrationAPI = (body) => {
  return axios.post(`${serverAddress}/auth/registration`, body);
};
export const getUserInfoAPI = (id) => {
  return axios.get(`${serverAddress}/auth/user/${id}`);
};
export const updateUserAPI = (id, body, token) => {
  return axios.patch(`${serverAddress}/auth/update/${id}`, body, {
    headers: {
      'x-access-token': `bearer ${token}`,
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  });
};
export const resetPasswordAPI = (id, body, token) => {
  return axios.patch(`${serverAddress}/auth/update/${id}`, body, {
    headers: {
      'x-access-token': `bearer ${token}`,
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  });
};
export const validateTokenAPI = (token) => {
  return axios.post(`${serverAddress}/auth/validate`, null, {
    headers: {'x-access-token': `bearer ${token}`},
  });
};
export const requestResetPasswordAPI = (data) => {
  return axios.post(`${serverAddress}/auth/reset`, data);
};
