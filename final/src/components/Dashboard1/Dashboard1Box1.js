import React from 'react';

import Box from '../base/Box';
import Dashboard1Heading from './Dashboard1Heading';
import Dashboard1Form from './Dashboard1Form';
import List from './List';

const Dashboard1Box1 = () => (
  <Box className="box-height">
    <Dashboard1Heading />
    <Dashboard1Form />
    <List />
  </Box>
);

export default Dashboard1Box1;
