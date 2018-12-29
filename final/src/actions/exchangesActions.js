import { RSAA } from 'redux-api-middleware';
import moment from 'moment';

import { BASE_API_URL } from '../constants/common';
import { EXCHANGES_ERROR, EXCHANGES_REQUEST, EXCHANGES_SUCCESS } from '../constants/actionTypes';

export const defaultParam = {
  currencyType: 'EUR',
  timePeriod: 'histoday',
  to: moment().unix(),
  limit: 100,
};

export function getExchanges({ currencyType, timePeriod, to, limit } = defaultParam) {
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
