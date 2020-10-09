// import {getProducts} from './actionTypes';
import {createAsyncAction} from 'redux-promise-middleware-actions';
import {getContactAPI} from '../../utils/contact';

export const getContactAPICreator = createAsyncAction(
  'GETCONTACT',
  async (name, sortBy, orderBy, page, limit) => {
    const res = await getContactAPI(name, sortBy, orderBy, page, limit);
    return res.data;
  },
);

// export const updateProductsAPICreator = createAsyncAction(
//   'UPDATEPRODUCT',
//   async (id, body) => {
//     const res = await updateProductsAPI(id, body);
//     return res.data;
//   },
// );

// export const addProductsAPICreator = createAsyncAction(
//   'ADDPRODUCTS',
//   async (body) => {
//     const res = await addProductsAPI(body);
//     return res.data;
//   },
// );
// export const deleteProductsAPICreator = createAsyncAction(
//   'DELETEPRODUCTS',
//   async (id) => {
//     const res = await deleteProductsAPI(id);
//     return res.data;
//   },
// );
export const setResetCreator = () => {
  return {
    type: 'RESET',
  };
};
export const setKeywordCreator = (keyword) => {
  return {
    type: 'KEYWORD',
    payload: keyword,
  };
};

export const setPageCreator = (page) => {
  return {
    type: 'SETPAGE',
    payload: page,
  };
};
