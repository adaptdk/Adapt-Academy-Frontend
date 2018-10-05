import React from 'react';

import Box from './base/Box';
import Columns from './base/Columns';

const Home = () => (
  <Columns>
    <Box>
      <h1>
        Welcome to Adapt academy ;)
      </h1>
      <div className="divider" />
      <div>
        <p>
          You have successfully started our react boilerplate which will let you:
        </p>
        <ul>
          <li>
            become familiar with ES6 syntax, callbacks, promises and other weird words
          </li>
          <li>
            become familiar with Node.js, npm and yarn
          </li>
          <li>
            to learn React.js
          </li>
          <li>
            to learn how to use existing React.js libraries for solving almost all tasks
          </li>
          <li>
            to learn how integrate libraries that are no compatible with npm or React.js
          </li>
          <li>
            to learn about application deployment
          </li>
          <li>
            and more ...
          </li>
        </ul>
      </div>
    </Box>
  </Columns>
);

export default Home;
