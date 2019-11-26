import React, { Component } from 'react';

// Components.
import SimpleForm from '../components/SimpleForm';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Lesson 9 Example Form</h1>
        </header>

        <section className="form">
          <SimpleForm/>
        </section>

      </div>
    );
  }
}

export default App;

