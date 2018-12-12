import { createAction } from 'redux-actions';

// Constants.
import { LIST_SET_ACTIVE, DO_RANDOM_STUFF } from '../../contants/list';

export const listSetActive = createAction(LIST_SET_ACTIVE);
export const doRandomStuff = createAction(DO_RANDOM_STUFF);
