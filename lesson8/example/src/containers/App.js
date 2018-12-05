import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 8 Example</h1>
        </header>
      </div>
    );
  }
}

export default App;
