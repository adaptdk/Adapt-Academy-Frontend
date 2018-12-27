import React from 'react';
import { Link } from 'react-router-dom';
import Exchange from '../components/Exchange/Exchange';

const ExchangeContainer = () => (
  <div className="dashboard2">
    <div className="dashboard2__section dashboard2__section--left-link margin--small-bottom">
      <Link to="home">Go back</Link>
    </div>
    <Exchange />
  </div>
);

export default ExchangeContainer;
