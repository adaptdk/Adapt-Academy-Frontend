import React from 'react';
import {
  renderToNodeStream,
  renderToStaticMarkup,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../../client/reducers/index';
import App from '../../../client/App';
import Html from '../../../shared/Html';

export default (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send(renderToStaticMarkup(<Html title={ process.env.APP_NAME } />));
  } else if (process.env.NODE_ENV === 'production') {
    const renderedBundle = renderToNodeStream(
      <Provider store={ createStore(reducers) }>
        <StaticRouter location={ req.url } context={ {} }>
          <App />
        </StaticRouter>
      </Provider>,
    );

    res.send(renderToStaticMarkup(
      <Html
        title={ process.env.APP_NAME }
        markup={ renderedBundle }
      />,
    ));
  }
};
