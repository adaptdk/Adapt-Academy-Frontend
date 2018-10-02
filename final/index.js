// SSR
require('@babel/register');
const createServer = require('./vendor/server/index').default;
const App = require('./src/client/App').default;
const reducers = require('./src/client/reducers/index').default;

createServer(App, reducers);

