import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

// Components.
import List from './List';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Lesson 8 Exercise</h1>
          </header>

          <section>
            <List />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
