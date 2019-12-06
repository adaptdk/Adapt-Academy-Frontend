
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import Reducer from '../Reducers/Reducer';

const initState = {};

const middleware = [thunk];

const store = createStore(
    Reducer, 
    initState,
    compose (
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export {store};