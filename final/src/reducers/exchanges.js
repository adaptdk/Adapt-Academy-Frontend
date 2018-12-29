import {
  EXCHANGES_ERROR,
  EXCHANGES_REQUEST,
  EXCHANGES_SUCCESS,
} from '../constants/actionTypes';
import { chain } from 'lodash';
import moment from 'moment';

const exchangesTransformer = (data) => chain(data)
  .map(({ time, volume }) => ({
    time: moment.unix(time).format('YYYY-MM-DD h:mm a'),
    volume
  }))
  .orderBy(['time'], ['desc'])
  .take(10)
  .value()
  .reverse();

const initialState = {
  data: [],
};

export default function exchanges(state = initialState, action) {
  switch(action.type) {
    case EXCHANGES_SUCCESS:
      const { payload: { Data } } = action;
      return {
        ...state,
        data: exchangesTransformer(Data),
      };
    case EXCHANGES_REQUEST:
    case EXCHANGES_ERROR:
    default:
      return state;
  }
}
