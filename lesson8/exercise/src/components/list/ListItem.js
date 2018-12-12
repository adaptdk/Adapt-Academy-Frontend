import React, { Component } from 'react'

import SecretItem from './SecretItem'

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
    if (this.props.data.secretItem) {
      return (
        <SecretItem
          item={ this.props.data }
          showItem={ this.state.showItem }
          toggleValue={ this.toggleValue }
          authorized={ this.props.authorized }
          onPasswordSubmit={ this.props.onPasswordSubmit }
          onPasswordChange={ this.props.onPasswordChange }
          passwordValue={ this.props.passwordValue }
        />
      )
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
        <h4>{ label }
          <i onClick={ this.toggleValue } className="fas fa-chevron-down"></i>
        </h4>
      )
    }
  }
}

export default ListItem;
