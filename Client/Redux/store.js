import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';
import forestsReducer from './reducers/forests';

const rootReducer = combineReducers({
  user: userReducer,
  forests: forestsReducer 
});

const store = createStore(rootReducer);

export default store;