import axios from 'axios';

export const getContactAPI = (name, sortBy, orderBy, page, limit) => {
  return axios.get(
    `http://192.168.43.220:8000/contact?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}`,
  );
};
