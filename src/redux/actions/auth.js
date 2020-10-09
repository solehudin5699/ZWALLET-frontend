import {createAsyncAction} from 'redux-promise-middleware-actions';

import {
  loginAPI,
  registrationAPI,
  updateUserAPI,
  getUserInfoAPI,
  validateTokenAPI,
} from '../../utils/auth';
// import {addTransactionAPI} from "../../utils/transaction"

export const loginAPICreator = createAsyncAction('LOGIN', async (body) => {
  const res = await loginAPI(body);
  return res.data;
});

export const registrationAPICreator = createAsyncAction(
  'REGISTRATION',
  async (body) => {
    const res = await registrationAPI(body);
    return res.data;
  },
);
export const validateTokenAPICreator = createAsyncAction(
  'VALIDATETOKEN',
  async (body) => {
    const res = await validateTokenAPI(body);
    return res.data;
  },
);
export const getUserInfoAPICreator = createAsyncAction(
  'GETUSERINFO',
  async (id) => {
    const res = await getUserInfoAPI(id);
    return res.data;
  },
);
export const dataFormRegistCreator = (data) => {
  return {
    type: 'FORMREGIST',
    payload: data,
  };
};
export const resetStatusLoginCreator = () => {
  return {
    type: 'RESETSTATUSLOGIN',
  };
};
export const resetStatusUpdateCreator = () => {
  return {
    type: 'RESETSTATUSUPDATE',
  };
};
export const logoutCreator = (event) => {
  return {
    type: 'LOGOUT',
  };
};
export const resetStatusTokenCreator = () => {
  return {
    type: 'RESETSTATUSTOKEN',
  };
};
export const updateUserAPICreator = createAsyncAction(
  'UPDATEUSER',
  async (id, body) => {
    const res = await updateUserAPI(id, body);
    return res.data;
  },
);

export const resetToastCreator = () => {
  return {
    type: 'RESETTOAST',
  };
};
