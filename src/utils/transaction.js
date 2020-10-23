import axios from 'axios';
import {serverAddress} from '../../sharedVariable';

export const addTransactionAPI = (body) => {
  return axios.post(`${serverAddress}/transaction`, body);
};
export const getTransactionAPI = (id, sortBy, orderBy, page, limit) => {
  return axios.get(
    `${serverAddress}/transaction/${id}?sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}`,
  );
};
