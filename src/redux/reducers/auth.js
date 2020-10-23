import {
  loginAPICreator,
  registrationAPICreator,
  updateUserAPICreator,
  getUserInfoAPICreator,
  validateTokenAPICreator,
  requestResetAPICreator,
  checkOTPAPICreator,
} from '../actions/auth';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  //LOGIN
  statusLogin: false,
  dataLogin: {},
  errorLogin: undefined,
  isLoginPending: false,
  isLoginFulFilled: false,
  isLoginRejected: false,

  //REGIST
  statusRegist: false,
  dataRegist: [],
  formRegist: undefined,
  errorRegist: undefined,
  isRegistPending: false,
  isRegistFulFilled: false,
  isRegistRejected: false,

  //UPDATEUSER
  statusUpdate: false,
  dataUpdate: [],
  errorUpdate: undefined,
  isUpdatePending: false,
  isUpdateFulFilled: false,
  isUpdateRejected: false,

  //GETUSERINFO
  statusGet: false,
  dataUser: [],
  errorGet: undefined,
  isGetPending: false,
  isGetFulFilled: false,
  isGetRejected: false,

  //VALIDATETOKEN
  statusToken: null,
  dataValidate: [],
  errorValidate: undefined,
  isValidatePending: false,
  isValidateFulFilled: false,
  isValidateRejected: false,

  //REQUEST TO RESET PASSWORD
  statusReq: null,
  dataReq: undefined,
  errorReq: undefined,
  isReqPending: false,
  isReqFulFilled: false,
  isReqRejected: false,

  //OTP STATUS
  statusOTP: null,
  dataOTP: [],
  errorOTP: undefined,
  isOTPPending: false,
  isOTPFulFilled: false,
  isOTPRejected: false,
};

const authAPIReducer = (prevState = initialState, action) => {
  switch (action.type) {
    //LOGIN
    case String(loginAPICreator.pending):
      return {
        ...prevState,
        isLoginPending: true,
      };
    case String(loginAPICreator.fulfilled):
      let datalogin;
      let status;
      let error;
      if (Number(action.payload.status) === 200) {
        datalogin = action.payload.data;
        status = 200;
        error = undefined;
      } else {
        status = 500;
        datalogin = undefined;
        error = action.payload.error;
      }

      return {
        ...prevState,
        statusLogin: status,
        statusToken: 200,
        dataLogin: datalogin,
        errorLogin: error,
        isLoginPending: false,
        isLoginFulFilled: true,
        isLoginRejected: false,
      };
    case String(loginAPICreator.rejected):
      return {
        ...prevState,
        statusLogin: 500,
        statusToken: 500,
        errorLogin: action.payload.error,
        isLoginRejected: true,
        isLoginPending: false,
        isLoginFulFilled: false,
      };

    //REGIST
    case String(registrationAPICreator.pending):
      return {
        ...prevState,
        isRegistPending: true,
      };
    case String(registrationAPICreator.fulfilled): {
      let statusSuccess;
      let error;
      let data;
      if (Number(action.payload.status) === 200) {
        statusSuccess = 200;
        error = undefined;
        data = action.payload.data;
      } else if (Number(action.payload.status) === 500) {
        statusSuccess = 500;
        error = action.payload.error;
        data = null;
      }
      return {
        ...prevState,
        statusRegist: statusSuccess,
        dataRegist: data,
        errorRegist: error,
        isRegistPending: false,
        isRegistFulFilled: true,
        isRegistRejected: false,
      };
    }
    case String(registrationAPICreator.rejected):
      return {
        ...prevState,
        statusRegist: 500,
        errorRegist: action.payload.error,
        isRegistRejected: true,
        isRegistPending: false,
        isRegistFulFilled: false,
      };

    //UPDATE USER
    case String(updateUserAPICreator.pending):
      return {
        ...prevState,
        isUpdatePending: true,
      };
    case String(updateUserAPICreator.fulfilled): {
      let statusSuccess;
      let error;
      if (Number(action.payload.status) === 200) {
        statusSuccess = 200;
        error = undefined;
      } else if (Number(action.payload.status) === 500) {
        statusSuccess = 500;
        error = action.payload.error;
      }
      return {
        ...prevState,
        dataLogin: {...prevState.dataLogin, ...action.payload.data},
        statusUpdate: statusSuccess,
        dataUpdate: action.payload.data,
        errorUpdate: error,
        isUpdatePending: false,
        isUpdateFulFilled: true,
        isUpdateRejected: false,
      };
    }
    case String(updateUserAPICreator.rejected):
      return {
        ...prevState,
        statusUpdate: 500,
        errorUpdate: action.payload.error,
        isUpdateRejected: true,
        isUpdatePending: false,
        isUpdateFulFilled: false,
      };
    case 'RESETSTATUSUPDATE':
      return {
        ...prevState,
        statusUpdate: false,
        statusReq: null,
        statusOTP: null,
      };

    //REQUEST RESET
    case String(requestResetAPICreator.pending):
      return {
        ...prevState,
        isReqPending: true,
      };
    case String(requestResetAPICreator.fulfilled): {
      let statusSuccess;
      let error;
      if (Number(action.payload.status) === 200) {
        statusSuccess = 200;
        error = undefined;
      } else if (Number(action.payload.status) === 500) {
        statusSuccess = 500;
        error = action.payload.error;
      }
      return {
        ...prevState,
        statusReq: statusSuccess,
        dataReq: action.payload.data,
        errorReq: error,
        isReqPending: false,
        isReqFulFilled: true,
        isReqRejected: false,
      };
    }
    case String(requestResetAPICreator.rejected):
      return {
        ...prevState,
        statusReq: 500,
        errorReq: action.payload.error,
        isReqRejected: true,
        isReqPending: false,
        isReqFulFilled: false,
      };

    //GETUSERINFO
    case String(getUserInfoAPICreator.pending):
      return {
        ...prevState,
        isGetPending: true,
      };
    case String(getUserInfoAPICreator.fulfilled): {
      // let newData = {...prevState.dataLogin, ...action.payload.data};
      return {
        ...prevState,
        dataLogin: {...prevState.dataLogin, ...action.payload.data},
        statusGet: action.payload.status,
        dataUser: action.payload.data,
        errorGet: undefined,
        isGetPending: false,
        isGetFulFilled: true,
        isGetRejected: false,
      };
    }
    case String(getUserInfoAPICreator.rejected):
      return {
        ...prevState,
        statusGet: 500,
        errorGet: action.payload,
        isGetRejected: true,
        isGetPending: false,
        isGetFulFilled: false,
      };

    //VALIDATETOKEN
    case String(validateTokenAPICreator.pending):
      return {
        ...prevState,
        isValidatePending: true,
      };
    case String(validateTokenAPICreator.fulfilled): {
      let status;
      if (Number(action.payload.status) === 200) {
        status = 200;
      } else if (Number(action.payload.status) === 500) {
        status = 500;
      }
      return {
        ...prevState,
        statusToken: status,
        dataValidate: action.payload.data,
        errorValidate: undefined,
        isValidatePending: false,
        isValidateFulFilled: true,
        isValidateRejected: false,
      };
    }
    case String(validateTokenAPICreator.rejected):
      return {
        ...prevState,
        statusToken: 500,
        errorValidate: action.payload,
        isValidateRejected: true,
        isValidatePending: false,
        isValidateFulFilled: false,
      };

    //CHECK OTP
    case String(checkOTPAPICreator.pending):
      return {
        ...prevState,
        isOTPPending: true,
      };
    case String(checkOTPAPICreator.fulfilled): {
      let statusSuccess;
      let error;
      let reqStatus;
      if (Number(action.payload.status) === 200) {
        statusSuccess = 200;
        error = undefined;
        reqStatus = 500;
      } else if (Number(action.payload.status) === 500) {
        statusSuccess = 500;
        error = action.payload.error;
        reqStatus = 200;
      }
      return {
        ...prevState,
        statusOTP: statusSuccess,
        dataOTP: action.payload.data,
        errorOTP: error,
        isOTPPending: false,
        isOTPFulFilled: true,
        isOTPRejected: false,
        statusReq: reqStatus,
      };
    }
    case String(checkOTPAPICreator.rejected):
      return {
        ...prevState,
        statusOTP: 500,
        errorOTP: action.payload.error,
        isOTPRejected: true,
        isOTPPending: false,
        isOTPFulFilled: false,
        statusReq: 200,
      };
    case 'LOGOUT': {
      const clearAppData = async function () {
        try {
          const keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.multiRemove(keys);
        } catch (error) {
          console.error('Error clearing app data.');
        }
      };
      clearAppData();
      return {
        ...prevState,
        dataLogin: [],
        statusLogin: false,
        errorLogin: undefined,
        isLoginPending: false,
        isLoginFulFilled: false,
        isLoginRejected: false,
        statusRegist: false,
        dataRegist: [],
        errorRegist: undefined,
        isRegistPending: false,
        isRegistFulFilled: false,
        isRegistRejected: false,
      };
    }
    case 'FORMREGIST':
      let dataFormRegist = action.payload;
      return {
        ...prevState,
        formRegist: dataFormRegist,
      };
    case 'RESETSTATUSREGIST':
      return {
        ...prevState,
        statusRegist: false,
        dataRegist: [],
        formRegist: undefined,
        errorRegist: undefined,
        isRegistPending: false,
        isRegistFulFilled: false,
        isRegistRejected: false,
      };
    case 'RESETSTATUSLOGIN':
      return {
        ...prevState,
        statusLogin: null,
      };
    case 'RESETSTATUSUPDATE':
      return {
        ...prevState,
        statusUpdate: null,
        statusReq: null,
      };
    case 'RESETSTATUSTOKEN':
      return {
        ...prevState,
        statusToken: null,
      };
    default:
      return prevState;
  }
};

export default authAPIReducer;
