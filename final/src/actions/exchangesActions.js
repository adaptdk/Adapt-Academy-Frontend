import { RSAA } from 'redux-api-middleware';
import moment from 'moment';

import { BASE_API_URL } from '../constants/common';
import { EXCHANGES_ERROR, EXCHANGES_REQUEST, EXCHANGES_SUCCESS,EXCHANGES_UPDATE_FORM } from '../constants/actionTypes';

export const defaultGetExchangeParams = {
  cryptoType: 'BTC',
  currencyType: 'EUR',
  timePeriod: 'histoday',
  to: moment().unix(),
  limit: 120,
};

export function getExchanges({ currencyType, timePeriod, to, limit } = defaultGetExchangeParams) {
  return {
    [RSAA]: {
      endpoint: `${BASE_API_URL}/data/exchange/${timePeriod}?tsym=${currencyType}&limit=${limit}&toTs=${to}`,
      method: 'GET',
      types: [
        EXCHANGES_REQUEST,
        EXCHANGES_SUCCESS,
        EXCHANGES_ERROR,
      ],
    }
  };
}

export function updateExchanges(currencyType, timePeriod, to, limit) {
  return {
    type: EXCHANGES_UPDATE_FORM,
    payload: {
      currencyType,
      timePeriod,
      to,
      limit
    }
  };
  }
