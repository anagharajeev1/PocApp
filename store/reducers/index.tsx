// store/reducers/index.ts
import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

export default rootReducer;
