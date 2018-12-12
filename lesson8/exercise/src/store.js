import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(listReducer, devToolsEnhancer());

export default store;
