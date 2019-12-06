
//                    Adapt Academy 2019 lesson 10 - Redux | task 01 by Donatas Dereškevičius


import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import './App.css';

const App = () => {

    return (
        <div className="App">
            <Users />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));