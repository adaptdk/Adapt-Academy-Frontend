import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard3Box1 from '../components/Dashboard3/Dashboard3Box1';

const Dashboard3Container = () => (
  <div className="dashboard3">
    <div className="dashboard3__section dashboard3__section--left-link margin--small-bottom">
      <Link to="home">Go back</Link>
    </div>
    <Dashboard3Box1 />
  </div>
);

export default Dashboard3Container;
