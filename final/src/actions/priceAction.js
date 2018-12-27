import { RSAA } from 'redux-api-middleware';
import { 
  PRICE_SUCCESS, 
  PRICE_REQUEST, 
  PRICE_ERROR, 
  UPDATE_PRICE_DATA,
} from '../constants/actionTypes';
import { limitPrice } from '../constants/options';

export const getPriceData = ({ currency, cryptoCurrency, timeInterval }) => {
  const index = timeInterval.split(' ')[1];
  const time = timeInterval.split(' ')[0];
  return {
    [RSAA]: {
      endpoint: `https://min-api.cryptocompare.com/data/${time}?fsym=${cryptoCurrency}&tsym=${currency}&limit=${index * limitPrice}`,
      method: 'GET',
      types: [
        PRICE_REQUEST,
        PRICE_SUCCESS,
        PRICE_ERROR,
      ],
    }
  };
};

export const updatePriceData = (timeInterval, currency) => {
  return {
    type: UPDATE_PRICE_DATA,
    payload: { timeInterval, currency }
  };
};