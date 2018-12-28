import { CRYPTO_DATA_SUCCESS } from '../constants/actionTypes';

export default function cryptoData(state = {}, action) {
  switch(action.type) {
    case CRYPTO_DATA_SUCCESS: {

      
      return action.payload;
    }
    default:
      return state;
  }
}

