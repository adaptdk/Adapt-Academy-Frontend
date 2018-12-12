import { handleActions } from 'redux-actions';

import { LIST_ITEMS, LIST_SET_ACTIVE, DO_RANDOM_STUFF } from '../../contants/list';

const initialState = {
  items: LIST_ITEMS,
  activeId: 0,
  id: 0,
};

const setActive = (state, { payload: { id } }) => {

  return {
    activeId: id,
  };
};

const listReducer = handleActions({
  [LIST_SET_ACTIVE]: (state, payload) => ({
    ...state,
    ...setActive(state, payload)
  }),
  [DO_RANDOM_STUFF]: (state, payload) => ({
    ...state,
    ...setActive(state, payload)
  }),
}, initialState);

export default listReducer;
