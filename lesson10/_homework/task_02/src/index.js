
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AddUserForm from './Components/AddUserForm';
import Users from './Components/Users';
import UserButtons from './Components/UserButtons';
import {store} from './Store/Store';

import './app.css';

const App = () => {

    return (
        <div className="app">
            <div className="left-side">
                <AddUserForm />
            </div>
            <div className="right-side">
                <Users />
                <UserButtons />
            </div>
        </div>
    );
};

ReactDOM.render(<Provider store={store}>
                                        <App />
                                                </Provider>, document.getElementById('root'));