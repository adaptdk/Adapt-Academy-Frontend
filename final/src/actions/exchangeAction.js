import { RSAA } from 'redux-api-middleware';
import moment from 'moment';
import { DATE_FORMAT } from '../constants/options';
import { 
  EXCHANGE_SUCCESS, 
  EXCHANGE_REQUEST, 
  EXCHANGE_ERROR,
  UPDATE_EXCHANGE_DATA,
} from '../constants/actionTypes';

export const getExchangeData = ({ currency, from, to }) => {
  const fromTime = moment(new Date(from), DATE_FORMAT);
  const toTime = moment(new Date(to), DATE_FORMAT);
  const toTimeToTs = parseInt(new Date(to).getTime() / 1000);
  const diffDays = toTime.diff(fromTime, 'days');

  return {
    [RSAA]: {
      endpoint: `https://min-api.cryptocompare.com/data/exchange/histoday?tsym=${currency}&limit=${diffDays}&toTs=${toTimeToTs}`,
      method: 'GET',
      types: [
        EXCHANGE_REQUEST,
        EXCHANGE_SUCCESS,
        EXCHANGE_ERROR,
      ],
    }
  };
};

export const updateExchangeData = text => {
  return {
    type: UPDATE_EXCHANGE_DATA,
    payload: text
  };
};