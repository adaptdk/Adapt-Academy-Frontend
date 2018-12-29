import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard1Box1 from '../components/Dashboard1/Dashboard1Box1';

const Dashboard1Container = () => (
  <div className="dashboard1">
    <div className="dashboard1__section dashboard1__section--left-link margin--small-bottom">
      <Link to="home">Go back</Link>
    </div>
    <Dashboard1Box1 />
  </div>
);

export default Dashboard1Container;
