import { combineReducers } from 'redux';
import userListReducer from './userListReducer';

const rootReducer = combineReducers({
  userListState: userListReducer,
});

export default rootReducer;
