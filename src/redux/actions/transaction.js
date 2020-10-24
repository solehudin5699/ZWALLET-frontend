import {createAsyncAction} from 'redux-promise-middleware-actions';

import {addTransactionAPI, getTransactionAPI} from '../../utils/transaction';

export const addTransactionAPICreator = createAsyncAction(
  'ADDTRANSACTION',
  async (body) => {
    const res = await addTransactionAPI(body);
    return res.data;
  },
);
//For pagination
export const getTransactionAPICreator = createAsyncAction(
  'GETTRANSACTION',
  async (id, sortBy, orderBy, page, limit) => {
    const res = await getTransactionAPI(id, sortBy, orderBy, page, limit);
    return res.data;
  },
);
//For home page
export const getTransactionAPICreator_Home = createAsyncAction(
  'GETTRANSACTION_HOME',
  async (id, sortBy, orderBy, page, limit) => {
    const res = await getTransactionAPI(id, sortBy, orderBy, page, limit);
    return res.data;
  },
);
export const setResetCreator = () => {
  return {
    type: 'RESETTRANS',
  };
};
export const notifCreator = (logic) => {
  return {
    type: 'NOTIF',
    payload: logic,
  };
};
