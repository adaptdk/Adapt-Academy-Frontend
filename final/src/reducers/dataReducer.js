import { SEND_PRICE_DATA } from '../constants/actionTypes';

const dataReducer = (state = { data: [], }, action) => {
  switch (action.type) {
    case SEND_PRICE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default dataReducer;