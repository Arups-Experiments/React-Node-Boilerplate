import { combineReducers } from 'redux';
import userListReducer from './userListReducer';
import dogListReducer from './dogsListReducer';

const rootReducer = combineReducers({
  userListState: userListReducer,
  dogListState: dogListReducer,
});

export default rootReducer;
