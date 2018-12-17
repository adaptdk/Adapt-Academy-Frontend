import { RSAA } from 'redux-api-middleware';
import { BASE_API_URL } from '../constants/common';
import {
  PRICES_REQUEST,
  PRICES_SUCCESS,
  PRICES_ERROR, PRICES_UPDATE_FORM,
} from '../constants/actionTypes';

export const defaultGetPricesParams = {
  cryptoType: 'BTC',
  currencyType: 'EUR',
  timePeriod: 'histominute',
  limit: 120,
};

export function getPrices({ cryptoType, currencyType, timePeriod, limit } = defaultGetPricesParams) {
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

const defaultUpdatePricesParams = {
  interval: 10,
  crypto: 'BTC',
};

export function updatePrices({ cryptoType, timeFrequency } = defaultUpdatePricesParams) {
  let pricesParams = defaultGetPricesParams;

  if (timeFrequency >= 60) {
    pricesParams = { ...defaultGetPricesParams, timePeriod: 'histohour' };
  }

  pricesParams = { ...pricesParams, cryptoType };

  return getPrices(pricesParams);
}

export function updatePricesForm({ cryptoType, timeFrequency }) {
  return {
    type: PRICES_UPDATE_FORM,
    payload: {
      cryptoType,
      timeFrequency,
    }
  };
}
