
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import {GET_USERS, POST_USER, SORT_NAME, SORT_USERNAME, SORT_DEFAULT} from '../Actions/ActionTypes';

const initState = {
    items: [],
    item: {}
};

export default (state = initState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                items: action.payload
            }
        case POST_USER:
            return {
                ...state,
                item: action.payload
            }
        case SORT_NAME:
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.name > b.name){
                        return 1;
                    } else if (a.name < b.name){
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        case SORT_USERNAME:
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.username > b.username){
                        return 1;
                    } else if (a.username < b.username){
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        case SORT_DEFAULT:
            return {
                ...state,
                items: action.payload.sort((a, b) => {
                    if (a.id > b.id){
                        return 1;
                    } else if (a.id < b.id){
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        default:
            return state;
    };
};