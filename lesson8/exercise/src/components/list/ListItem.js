import React, { Component } from 'react'
import PasswordInput from './PasswordInput'

class ListItem extends Component {
  state = {
    showItem: false,
  }

  //change local state showItem bool
  toggleValue = () => {
    const showItem = this.state.showItem
    this.setState({
      showItem: !showItem,
    });
  }

  render() {
    const { label, value } = this.props.data;
    //codeblock for item with label='Slapta informacija(password: admin)' that has diffent functionality
    if (label === 'Slapta informacija(password: admin)') {
      if (this.state.showItem) {
        return (
          <div>
            <h4 className="text-danger">{ label }
              <i onClick={ this.toggleValue } className="fas fa-chevron-up"></i>
            </h4>
            {/* Check if user is authorized to access this information - if yes render information, else render password input */ }
            { this.props.authorized ? (<div className="bg-danger text-light">
              <h4>Credit Card Number:</h4>
              <p>{ value.creditCard }</p>
              <h4>Gender:</h4>
              <p>{ value.gender }</p>
              <h4>Relationship:</h4>
              <p>{ value.relationship }</p>
            </div>) : <PasswordInput onPasswordSubmit={ this.props.onPasswordSubmit } onPasswordChange={ this.props.onPasswordChange } passwordValue={ this.props.passwordValue } /> }
          </div >
        )
      } else {
        return (
          <div>
            <h4 className="text-danger">{ label }
              <i onClick={ this.toggleValue } className="fas fa-chevron-down"></i>
            </h4>
          </div >
        )
      }
    }
    // codeblock for the rest of items - that don't need permission to access data.
    if (this.state.showItem) {
      return (
        <div>
          <h4>{ label }
            <i onClick={ this.toggleValue } className="fas fa-chevron-up"></i>
          </h4>
          <p>{ value }</p>
        </div >
      )
    } else {
      return (
        <h4>{ label }{ ' ' }
          <i onClick={ this.toggleValue } className="fas fa-chevron-down"></i>
        </h4>
      )
    }
  }
}

export default ListItem;
