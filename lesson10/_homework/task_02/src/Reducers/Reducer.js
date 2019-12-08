
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import {combineReducers} from 'redux';
import UsersReducer from './UsersReducer';

export default combineReducers({
    users: UsersReducer
});