import {
  PRICES_ERROR,
  PRICES_REQUEST,
  PRICES_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
 data: [],
 timeFrom: 0,
 timeTo: 0,
};

export default function prices(state = initialState, action) {
  switch(action.type) {
    case PRICES_SUCCESS:
      const { payload: { Data } } = action;
      return {
        data: Data
      };
    case PRICES_REQUEST:
    case PRICES_ERROR:
    default:
      return state;
  }
}
