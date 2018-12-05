import React from 'react';

// Components.
import List from './List';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 8 Example</h1>
        </header>

        <section>
          <List/>
        </section>

      </div>
    );
  }
}

export default App;
