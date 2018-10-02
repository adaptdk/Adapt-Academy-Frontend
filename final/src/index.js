import React from 'react';
import { hydrate, render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './App';
import initialState from './initialState';
import initStore from './store/index';

import './styles/main.scss';

const history = createBrowserHistory();
const store = initStore(history, initialState);

if (process.env.NODE_ENV === 'development') {
  render(
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  );
} else {
  hydrate(
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  );
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require

    render(
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('app'),
    );
  });

  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default; // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer);
  });
}

