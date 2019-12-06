
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByName, sortByUsername, sortByDefault} from '../Actions/UserActions';

class UserButtons extends Component {

    onSubmit(event) {
        event.preventDefault();
        const users = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username
        };
        
        this.props.sortByName(users);
        this.props.sortByUsername(users);
        this.props.sortByDefault(users);
    };

    render() {
        return (
            <div className="controls">
                <h3 className="controls__title">Sort by</h3>
                <button className="controls__button" type="button" name="name" value={this.props.name} onSubmit={this.onSubmit} onClick={this.props.sortByName}>by Name</button>
                <button className="controls__button" type="button" name="username" value={this.props.username} onSubmit={this.onSubmit} onClick={this.props.sortByUsername}>by Username</button>
                <button className="controls__button" type="button" name="default" value={this.props.id} onSubmit={this.onSubmit} onClick={this.props.sortByDefault}>by Default</button>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    users: state.users.items
});

const mapDispatchToProps = dispatch => ({
    sortByName: () => dispatch(sortByName()),
    sortByUsername: () => dispatch(sortByUsername()),
    sortByDefault: () => dispatch(sortByDefault())
  });
  
 
export default connect(mapStateToProps, mapDispatchToProps)(UserButtons);