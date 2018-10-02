// SSR
require('@babel/register');
const createServer = require('./vendor/server/index').default;
const App = require('./src/App').default;
const reducers = require('./src/reducers/index').default;

createServer(App, reducers);

