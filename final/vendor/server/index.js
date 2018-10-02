import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import proxy from 'http-proxy-middleware';

import htmlRendererMiddleware from './middleware/htmlRenderer';

const createServer = (pages, reducers) => {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    const config = require('../../webpack/webpack.config.dev'); // eslint-disable-line global-require
    const compiler = webpack(config);
    app.use(devMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
      },
    }));
    app.use(hotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, '../client')));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../dist')));
  }

  const PORT = normalizePort(process.env.PORT || 4000);

  app.use('/api', proxy({
    target: process.env.API_ENDPOINT,
    pathRewrite: {
      '^/api': '/',
    },
    changeOrigin: true,
  }));
  app.get('*', htmlRendererMiddleware(pages, reducers));
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err); // eslint-disable-line no-console
    } else {
      console.log(`App listening on port ${PORT} -> http://localhost:${PORT}`); // eslint-disable-line no-console
      console.log('Press Ctrl+C to quit.'); // eslint-disable-line no-console
    }
  });

  function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }
};

export default createServer;
