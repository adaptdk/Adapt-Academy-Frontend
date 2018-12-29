import { handleActions } from 'redux-actions';

// Constants.
import {
  GET_DATA,
  SET_CURRENCY,
  FAILED_FETCH,
} from '../../constants/Dashboard1Constants/actionsTypes';

const initialState = {};

const pricePageReducer = handleActions(
  {
    [GET_DATA]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [SET_CURRENCY]: (state, action) => ({
      ...state,
      currency: action.payload,
    }),
    [FAILED_FETCH]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default pricePageReducer;
