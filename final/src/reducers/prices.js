import {
  PRICES_ERROR,
  PRICES_REQUEST,
  PRICES_SUCCESS, PRICES_UPDATE_FORM,
} from '../constants/actionTypes';
import { chain, isEmpty, last } from 'lodash';
import moment from 'moment';
import { MINUTE_IN_MS } from '../constants/common';

const priceTransformer = (data, timeFrequency = 10) =>
  chain(data)
  .reduce((acc, o) => {
    if (isEmpty(acc)) {
      acc.push({ ...o, change: 0 });
    } else {
      const previous = last(acc);
      const current = o;
      const previousTime = moment.unix(previous.time);
      const currentTime = moment.unix(current.time);

      if(currentTime.diff(previousTime) / MINUTE_IN_MS >= timeFrequency) { //changed algorithm so that negative number represents decrease and positive - increase
        const increase = current.close - previous.close;
        const change = increase / previous.close * 100;
        acc.push({ ...o, change });
      }
    }

    return acc;
  }, [])
  .orderBy(['time'], ['desc'])
  .map(({ time, close, change }, index) => ({
      time: moment.unix(time).format('YYYY-MM-DD h:mm a'),
      close,
      id: index + 1,
      change,
  }))
  .take(10)
  .value();

const initialState = {
  data: [],
  timeFrequency: 5,
  cryptoType: 'BTC',
};

export default function prices(state = initialState, action) {
  switch(action.type) {
    case PRICES_UPDATE_FORM: {
      const { cryptoType, timeFrequency } = action.payload;
      return {
        ...state,
        cryptoType,
        timeFrequency,
      };
    }
    case PRICES_SUCCESS:
      const { payload: { Data } } = action;
      const { timeFrequency } = state;
      return {
        ...state,
        data: priceTransformer(Data, timeFrequency),
      };
    case PRICES_REQUEST:
    case PRICES_ERROR:
    default:
      return state;
  }
}
