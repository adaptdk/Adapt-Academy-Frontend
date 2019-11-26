import { combineReducers } from 'redux';

// Reducers.
import counterReducer from './counter/counterReducer';

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;