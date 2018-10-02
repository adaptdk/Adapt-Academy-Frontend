import React from 'react';
import {
  renderToNodeStream,
  renderToStaticMarkup,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Html from '../../html';

export default (AppContainer, reducers) => (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send(renderToStaticMarkup(<Html title={ process.env.APP_NAME } />));
  } else if (process.env.NODE_ENV === 'production') {
    const renderedBundle = renderToNodeStream(
      <Provider store={ createStore(reducers) }>
        <StaticRouter location={ req.url } context={ {} }>
          <AppContainer />
        </StaticRouter>
      </Provider>,
    );

    res.send(renderToStaticMarkup(
      <AppContainer
        title={ process.env.APP_NAME }
        markup={ renderedBundle }
      />,
    ));
  }
};
