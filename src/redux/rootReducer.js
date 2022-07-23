import { userReducer } from './User/userReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
