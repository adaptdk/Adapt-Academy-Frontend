// All actions will be exposed by this file
import { SEND_PRICE_DATA } from '../constants/actionTypes';

export const sendPriceData = data => ({ type: SEND_PRICE_DATA, payload: data });
