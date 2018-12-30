import React from 'react';
import { Link } from 'react-router-dom';


import Box from '../base/Box';
import Dashboard2Container from '../../containers/Dashboard2Container';

const HistoricalBox = () => (
  <Box>
    <div className="home-box__header home-box__header--right-link">

      <h3>Historical data widget</h3>
      <Link to="crypto_volumes">See more</Link>
    </div>
    <div className="divider margin--small-bottom" />
    <Dashboard2Container className="home__wireframe-img"
    />
  </Box>
);

export default HistoricalBox;
