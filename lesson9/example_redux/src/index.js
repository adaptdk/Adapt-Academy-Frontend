import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Assets.
import './assets/styles/index.css';

// Containers.
import App from './containers/App';

// Utilities.
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
