import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  loading: false,
  modal: modalReducer,
});

export default uiReducer;
