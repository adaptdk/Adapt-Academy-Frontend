import {
  EXCHANGES_ERROR,
  EXCHANGES_REQUEST,
  EXCHANGES_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  data: [],
};

export default function exchanges(state = initialState, action) {
  switch(action.type) {
    case EXCHANGES_SUCCESS:
      const { payload: { Data } } = action;
      return {
        ...state,
        data: Data
      };
    case EXCHANGES_REQUEST:
    case EXCHANGES_ERROR:
    default:
      return state;
  }
}
