import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onPasswordChange } from '../../actions/listActions';
import { onPasswordSubmit } from '../../actions/listActions';

class PasswordInput extends Component {
  onPasswordChange = e => {
    this.props.onPasswordChange(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.props.password === this.props.passwordValue) {
      this.props.onPasswordSubmit(true);
    } else {
      alert('Neturite prieigos!!! :DDDD');
    }
  };

  render() {
    const { passwordValue } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            onChange={this.onPasswordChange}
            value={passwordValue}
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Confirm identity
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    passwordValue: state.currentlyTypedPass,
    password: state.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPasswordChange: password => dispatch(onPasswordChange(password)),
    onPasswordSubmit: isAuthorized => dispatch(onPasswordSubmit(isAuthorized)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordInput);
