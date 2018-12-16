import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import prices from './prices';
import exchanges from './exchanges';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  prices,
  exchanges,
});
