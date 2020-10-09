import {
  addTransactionAPICreator,
  getTransactionAPICreator,
} from '../actions/transaction';

const initialState = {
  dataTransaction: [],
  statusAdd: undefined,
  errorAdd: undefined,
  isAddPending: false,
  isAddFulFilled: false,
  isAddRejected: false,

  transaction: [],
  statusGet: undefined,
  errorGet: undefined,
  isGetPending: false,
  isGetFulFilled: false,
  isGetRejected: false,
};

const transactionReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case String(addTransactionAPICreator.pending):
      return {
        ...prevState,
        isAddPending: true,
      };
    case String(addTransactionAPICreator.fulfilled): {
      let data;
      let status;
      if (action.payload.status === 200) {
        data = action.payload.data;
        status = 200;
      } else {
        data = {};
        status = 500;
      }
      return {
        ...prevState,
        dataTransaction: data,
        statusAdd: status,
        errorAdd: undefined,
        isAddPending: false,
        isAddFulFilled: true,
        isAddRejected: false,
      };
    }
    case String(addTransactionAPICreator.rejected):
      return {
        ...prevState,
        statusAdd: 500,
        errorAdd: action.payload,
        isAddRejected: true,
        isAddPending: false,
        isAddFulFilled: false,
      };

    // GETTRANSACTION
    case String(getTransactionAPICreator.pending):
      return {
        ...prevState,
        isGetPending: true,
      };
    case String(getTransactionAPICreator.fulfilled): {
      let data;
      let status;
      if (action.payload.status === 200) {
        data = action.payload.data;
        status = 200;
      } else {
        data = {};
        status = 500;
      }
      return {
        ...prevState,
        transaction: data,
        statusGet: status,
        errorGet: undefined,
        isGetPending: false,
        isGetFulFilled: true,
        isGetRejected: false,
      };
    }
    case String(getTransactionAPICreator.rejected):
      return {
        ...prevState,
        statusGet: 500,
        errorGet: action.payload,
        isGetRejected: true,
        isGetPending: false,
        isGetFulFilled: false,
      };
    case 'RESET':
      return {
        ...prevState,
        // contact: [],
        statusAdd: undefined,
      };
    default:
      return prevState;
  }
};

export default transactionReducer;
