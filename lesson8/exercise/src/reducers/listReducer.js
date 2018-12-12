import { LIST_ITEMS } from '../contants/list';

const initState = {
  data: LIST_ITEMS,
  activeId: 0,
  password: 'admin',
  authorized: false,
  currentlyTypedPass: '',
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return {
        ...state,
        activeId: action.payload,
      };
    case 'ON_PASSWORD_CHANGE':
      return {
        ...state,
        currentlyTypedPass: action.payload,
      };
    case 'ON_PASSWORD_SUBMIT':
      return {
        ...state,
        authorized: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default listReducer;
