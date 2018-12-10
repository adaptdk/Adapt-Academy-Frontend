import React, { Component } from 'react';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

let count = 0;

class App extends Component {
  onClickAdd = () => {
    this.setCount(count + 1);
  };

  onClickRemove = () => {
    this.setCount(count - 1);
  };

  setCount = (value) => {
    count = value;
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 8 Example</h1>
        </header>

        <section className="counter">

          <div className="box">
            <button className="button" onClick={this.onClickRemove}>Minus One</button>
          </div>

          <div className="box">
            <h2>{count}</h2>
          </div>

          <div className="box">
            <button className="button" onClick={this.onClickAdd}>Plus One</button>
          </div>

        </section>

      </div>
    );
  }
}

export default App;
