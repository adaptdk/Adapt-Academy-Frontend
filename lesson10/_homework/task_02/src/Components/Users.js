
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUsers} from '../Actions/UserActions';

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    };
    
    render() {
        const {users} = this.props;

        return (
            <div>
                <ul className="user-list">
                    <h1 className="user-list__title">name ___ username</h1>
                    {users.map(users => (
                        <li className="user-list__person" key={users.name}>
                            
                            <p>{users.name} __ ( {users.username} )</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    users: state.users.items
});

export default connect(mapStateToProps, {fetchUsers})(Users);