import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import priceReducer from './priceReducer';
import exchangeReducer from './exchangeReducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  price: priceReducer,
  exchange: exchangeReducer,
});
