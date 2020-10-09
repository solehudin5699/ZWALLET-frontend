import {combineReducers} from 'redux';
import contactReducer from './contact';
import transactionReducer from './transaction';
import authAPIReducer from './auth';
import modalReducer from './modal';
import socketReducer from './socket';
//Combine reducers
const indexReducer = combineReducers({
  contact: contactReducer,
  transaction: transactionReducer,
  authAPI: authAPIReducer,
  socket: socketReducer,
  modals: modalReducer,
});

export default indexReducer;
