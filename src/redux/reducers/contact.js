import {getContactAPICreator} from '../actions/contact';

const initialState = {
  contact: [],
  contactBasedPage: [],

  error: undefined,
  isPending: false,
  isFulFilled: false,
  isRejected: false,

  page: 1,
  keyword: '',
};

const contactReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case String(getContactAPICreator.pending):
      return {
        ...prevState,
        isPending: true,
      };
    case String(getContactAPICreator.fulfilled):
      let newData = prevState.contact.concat(action.payload.data);
      return {
        ...prevState,
        contact: newData,
        contactBasedPage: action.payload.data,
        error: undefined,
        isPending: false,
        isFulFilled: true,
        isRejected: false,
      };
    case String(getContactAPICreator.rejected):
      return {
        ...prevState,
        error: action.payload,
        isRejected: true,
        isPending: false,
        isFulFilled: false,
      };

    case 'RESET':
      return {
        ...prevState,
        contact: [],
      };
    case 'KEYWORD':
      return {
        ...prevState,
        keyword: action.payload,
      };
    case 'SETPAGE':
      return {
        ...prevState,
        page: action.payload,
      };
    default:
      return prevState;
  }
};

export default contactReducer;
