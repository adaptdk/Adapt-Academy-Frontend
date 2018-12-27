import { 
  EXCHANGE_ERROR,
  EXCHANGE_REQUEST,
  EXCHANGE_SUCCESS,
  UPDATE_EXCHANGE_DATA,
} from '../constants/actionTypes';
import { 
  filterExchangeData,
} from '../components/Functions/ExchangeFunction';

const initialState = {
  data: {
    xAxis: [],
    yAxis: [],
  },
  title: '',
};

const exchangeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_EXCHANGE_DATA:
      return {
        ...state,
        title: action.payload,
      };
    case EXCHANGE_SUCCESS:
      return {
        ...state,
        data: filterExchangeData(action.payload.Data),
      };
    case EXCHANGE_REQUEST:    
    case EXCHANGE_ERROR:
    default:
      return state;
  }
};

export default exchangeReducer;