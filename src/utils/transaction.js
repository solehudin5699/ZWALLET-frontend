import axios from 'axios';

export const addTransactionAPI = (body) => {
  return axios.post('http://192.168.43.220:8000/transaction', body);
};
export const getTransactionAPI = (id, sortBy, orderBy, page, limit) => {
  return axios.get(
    `http://192.168.43.220:8000/transaction/${id}?sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}`,
  );
};
