import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../components/Price/Price';

const Dashboard1Container = () => (
  <div className="dashboard1">
    <div className="dashboard1__section dashboard1__section--left-link margin--small-bottom">
      <Link to="home">Go back</Link>
    </div>
    <Price />
  </div>
);

export default Dashboard1Container;
