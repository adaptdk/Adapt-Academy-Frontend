import React, { Component } from 'react';

// Components.
import AppRouter from './AppRouter';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 9 Example Route</h1>
        </header>

        <AppRouter/>

      </div>
    );
  }
}

export default App;
