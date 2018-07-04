import * as types from '../constants/actionTypes';

export const toggleTodo = (id) => ({ type: types.TODO_TOGGLE, payload: { id } });
