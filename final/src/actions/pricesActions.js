import { RSAA } from 'redux-api-middleware';
import { BASE_API_URL } from '../constants/common';
import {
  PRICES_REQUEST,
  PRICES_SUCCESS,
  PRICES_ERROR,
} from '../constants/actionTypes';

const defaultParams = {
  cryptoType: 'BTC',
  currencyType: 'EUR',
  timePeriod: 'histohour',
  limit: 120,
};

export function getPrices({ cryptoType, currencyType, timePeriod, limit } = defaultParams) {
  return {
    [RSAA]: {
      endpoint: `${BASE_API_URL}/data/${timePeriod}?fsym=${cryptoType}&tsym=${currencyType}&limit=${limit}&extraParams=CryptoCompare`,
      method: 'GET',
      types: [
        PRICES_REQUEST,
        PRICES_SUCCESS,
        PRICES_ERROR,
      ],
    }
  };
}
