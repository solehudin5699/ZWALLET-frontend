import axios from 'axios';
import {serverAddress} from '../../sharedVariable';

export const getContactAPI = (name, sortBy, orderBy, page, limit) => {
  return axios.get(
    `${serverAddress}/contact?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}`,
  );
};
