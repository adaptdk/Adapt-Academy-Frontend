import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

// Reducers.
import reducers from './reducers';

const configureStore = (initialState = {}) => {
  const middleware = [
    thunkMiddleware,
  ];

  // Using redux dev tools only on dev env.
  const isDev = process.env.NODE_ENV === 'development';

  // Add support for Redux dev tools.
  const composeEnhancers = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
};

export default configureStore;
