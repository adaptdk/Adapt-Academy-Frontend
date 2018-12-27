import { 
  PRICE_ERROR,
  PRICE_REQUEST,
  PRICE_SUCCESS,
  UPDATE_PRICE_DATA,
} from '../constants/actionTypes';
import { 
  getPriceText, 
  filterPriceData, 
} from '../components/Functions/PriceFunctions';

const initialState = {
  data: [],
  text: '',
  type: '',
  index: null,
};

const priceReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PRICE_DATA:
      return {
        ...state,
        text: getPriceText(action.payload.timeInterval),
        index: action.payload.timeInterval.split(' ')[1],
        type: action.payload.currency,
      };
    case PRICE_SUCCESS:
      return {
        ...state,
        data: filterPriceData(action.payload.Data),
      };
    case PRICE_REQUEST:    
    case PRICE_ERROR:
    default:
      return state;
  }
};

export default priceReducer;