import { handleActions } from 'redux-actions';

// Utilities.
import counterIncrementHandler from './handlers/counterIncrementHandler';
import counterDecrementHandler from './handlers/counterDecrementHandler';

// Constants.
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from '../../constants/counter';

const initialState = {
  count: 1,
};

const counterReducer = handleActions({
  [COUNTER_INCREMENT]: (state) => ({
    ...state,
    ...counterIncrementHandler(state),
  }),
  [COUNTER_DECREMENT]: (state) => ({
    ...state,
    ...counterDecrementHandler(state),
  }),
}, initialState);

export default counterReducer;
