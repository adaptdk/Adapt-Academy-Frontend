import { createAction } from 'redux-actions';

// Constants.
import {
  GET_DATA,
  SET_CURRENCY,
  FAILED_FETCH,
} from '../constants/Dashboard1Constants/actionsTypes';

const getDataAction = createAction(GET_DATA);
const failedFetchAction = createAction(FAILED_FETCH);

const apiKey =
  '703108a067b8c49b2e49be377b335357b2752ae9bac982c5bc3277bcddd5b39f';
const limit = '30';

export const getData = (interval, cryptoCurrency, currency, aggregate) => {
  return dispatch => {
    fetch(
      `https://min-api.cryptocompare.com/data/histo${interval}?fsym=${cryptoCurrency}&tsym=${currency}&aggregate=${aggregate}&limit=${limit}&${apiKey}`,
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getDataAction(data.Data.reverse()));
      })
      .catch(err => {
        console.log(err);
        dispatch(failedFetchAction(err));
      });
  };
};

export const setCurrency = createAction(SET_CURRENCY);
