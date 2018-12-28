import { FORM_SUBMIT } from '../constants/actionTypes';

export default function formData(state = {}, action) {
  switch(action.type) {
    case FORM_SUBMIT: {

      
      return action.payload;
    }
    default:
      return state;
  }
}