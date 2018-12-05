import React, { Component } from 'react';

// Assets.
import logo from '../assets/svg/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    // @TODO
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // @TODO
  }

  shouldComponentUpdate(nextProps, nextState) {
    // @TODO
    return true;
  }

  onClickAdd = () => {
    this.setCount(this.state.count + 1);
  };

  onClickRemove = () => {
    this.setCount(this.state.count - 1);
  };

  setCount = (value) => {
    this.setState({
      count: value,
    })
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
            <h2>{this.state.count}</h2>
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
