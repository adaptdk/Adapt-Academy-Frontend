import { combineReducers } from 'redux';
import counterReduce from './counter';

const rootReducer = combineReducers({
  counter: counterReduce,
});

export default rootReducer;
