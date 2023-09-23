import { createStore, combineReducers } from 'redux';
import userReducer from './Redux-reducers/user';
import forestsReducer from './Redux-reducers/forests';

const rootReducer = combineReducers({
  user: userReducer,
  forests: forestsReducer 
});

const store = createStore(rootReducer);

export default store;