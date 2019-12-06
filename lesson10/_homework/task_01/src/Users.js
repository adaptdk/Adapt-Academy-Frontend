
//                    Adapt Academy 2019 lesson 10 - Redux | task 01 by Donatas Dereškevičius


import React from "react";
import {FetchData} from "./FetchData";

const Users = ({error, isLoaded, users}) => {
    
    if (error) {
        return <div>Error! - {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading ...</div>;
    } else {
        return (
            <ul className="userList">
                <h1 className="userList__title">name ___ username</h1>
                {users.map(users => (
                    <li className="userList__person" key={users.name}>
                        
                        <p>{users.name} __ ( {users.username} )</p>
                    </li>
                ))}
            </ul>
        );
    };
};

export default FetchData({url: "https://jsonplaceholder.typicode.com/users"})(Users);