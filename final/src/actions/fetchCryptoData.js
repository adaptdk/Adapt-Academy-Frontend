import { RSAA } from 'redux-api-middleware';

import {
  CRYPTO_DATA_REQUEST,
  CRYPTO_DATA_SUCCESS,
  CRYPTO_DATA_FAILURE,
} from '../constants/actionTypes';

export const fetchCryptoData = () => ({
  [RSAA]: {
    endpoint: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      CRYPTO_DATA_REQUEST,
      CRYPTO_DATA_SUCCESS,
      CRYPTO_DATA_FAILURE,
    ]
  }
});
