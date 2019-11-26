import { createAction } from 'redux-actions';

// Constants.
import { COUNTER_DECREMENT } from '../../constants/counter';

const counterDecrement = createAction(COUNTER_DECREMENT);

export default counterDecrement;
