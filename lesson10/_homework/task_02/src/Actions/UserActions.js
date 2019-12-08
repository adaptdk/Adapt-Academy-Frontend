
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import {GET_USERS, POST_USER, SORT_NAME, SORT_USERNAME, SORT_DEFAULT} from './ActionTypes';

const url = "https://jsonplaceholder.typicode.com/users";

//          GET users from API
export const fetchUsers = () => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then((users) => dispatch({
        type: GET_USERS,
        payload: users
    }));
};

//          POST user to API
export const addUser = (postUser) => dispatch => {
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postUser)
    })
    .then(res => res.json())
    .then((users) => dispatch({
        type: POST_USER,
        payload: users
    }));
    alert("User will be virtually added to fake API ! Check Redux dev tool to see this action ...");
};

//          SORT users by name
export const sortByName = () => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then((users) => dispatch({
        type: SORT_NAME,
        payload: users
    }));
};

//          SORT users by username
export const sortByUsername = () => dispatch => {
    fetch (url)
    .then (res => res.json())
    .then((users) => dispatch({
        type: SORT_USERNAME,
        payload: users
    }));
};

//          SORT users by default
export const sortByDefault = () => dispatch => {
    fetch (url)
    .then (res => res.json())
    .then((users) => dispatch({
        type: SORT_DEFAULT,
        payload: users
    }));
};