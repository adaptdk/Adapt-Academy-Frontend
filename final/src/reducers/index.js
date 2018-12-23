import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import dataReducer from './dataReducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  data: dataReducer,
});
