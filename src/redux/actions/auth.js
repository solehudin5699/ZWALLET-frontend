import {createAsyncAction} from 'redux-promise-middleware-actions';

import {
  loginAPI,
  registrationAPI,
  updateUserAPI,
  getUserInfoAPI,
  validateTokenAPI,
  requestResetPasswordAPI,
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
export const requestResetAPICreator = createAsyncAction(
  'RESETPASSWORD',
  async (body) => {
    const res = await requestResetPasswordAPI(body);
    return res.data;
  },
);
export const dataFormRegistCreator = (data) => {
  return {
    type: 'FORMREGIST',
    payload: data,
  };
};
export const resetStatusRegistCreator = () => {
  return {
    type: 'RESETSTATUSREGIST',
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
  async (id, body, token) => {
    const res = await updateUserAPI(id, body, token);
    return res.data;
  },
);
export const checkOTPAPICreator = createAsyncAction(
  'CHECKOTP',
  async (body, token) => {
    const res = await updateUserAPI(1, body, token);
    return res.data;
  },
);
