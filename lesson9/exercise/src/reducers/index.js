import { combineReducers } from 'redux';

// Reducers.
import listReducer from './list/listReducer';

const reducers = combineReducers({
  list: listReducer,
});

export default reducers;