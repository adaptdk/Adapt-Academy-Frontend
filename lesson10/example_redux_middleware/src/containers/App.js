import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

// Actions.
import {
  counterIncrement,
  counterDecrement,
} from '../actions/counter';

class App extends Component {
  onClickAdd = () => {
    this.props.actions.counterIncrement();
  };

  onClickRemove = () => {
    this.props.actions.counterDecrement();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 10 Redux Example Middleware</h1>
        </header>

        <section className="counter">

          <div className="box">
            <button className="button" onClick={this.onClickRemove}>Minus One</button>
          </div>

          <div className="box">
            <h2>{this.props.count}</h2>
          </div>

          <div className="box">
            <button className="button" onClick={this.onClickAdd}>Plus One</button>
          </div>

        </section>

      </div>
    );
  }
}

const mapStateToProps = ({ counter: { count } }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    counterIncrement,
    counterDecrement,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

