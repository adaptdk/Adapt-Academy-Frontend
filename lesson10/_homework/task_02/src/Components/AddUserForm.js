
//                    Adapt Academy 2019 lesson 10 - Redux | task 02 by Donatas Dereškevičius


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../Actions/UserActions';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            username: this.state.username
        };

        this.props.addUser(user);
    };

    render() {
        return (
            <div className="left-block">
                <h1 className="left-block__title">Add _ user</h1>
                <form className="form" onSubmit={this.onSubmit}>
                    <label className="label-name">
                        <p className="label-name__title">Name</p>
                        <input className="label-name__input" type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    </label>
                    <br />
                    <label className="label-username">
                        <p className="label-username__title">Username</p>
                        <input className="label-username__input" type="text" name="username" value={this.state.username} onChange={this.onChange} />
                    </label>
                    <br />
                    <button className="form__button" type="submit">Add</button>
                </form>
                <p className="left-block__subtitle">Note ! _ since this is a fake API we can't see added user on the list, but we can see this action in ( Redux dev tool )</p>
            </div>
        );
    };
};

AddUserForm.propTypes = {
    addUser: PropTypes.func.isRequired
};
 
export default connect(null, {addUser})(AddUserForm);