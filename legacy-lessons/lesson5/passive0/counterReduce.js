import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/index';

const counterReduce = (state = 0, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counterReduce;
