import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import pricePageReducer from './Dashboard1Reducers/pricePageReducer';
import exchanges from './exchanges';

export default combineReducers({
  pricePage: pricePageReducer,
  routing: routerReducer,
  form: formReducer,
  exchanges
});
