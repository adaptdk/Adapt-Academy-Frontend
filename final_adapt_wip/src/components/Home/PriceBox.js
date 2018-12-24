import React from 'react';
import { Link } from 'react-router-dom';
// import PriceWidgetMin from '../PriceWidget/PriceWidgetMin';
import Dasboard1Container from '../../containers/Dashboard1Container'

import Box from '../base/Box';

const PriceBox = () => (
  <Box>
    <div className="home-box__header home-box__header--right-link">
      <h3>Price widget</h3>
      <Link to="dashboard1">See more</Link>
    </div>
    <div className="divider margin--small-bottom" />
    <Dasboard1Container
      className="home__wireframe-img"
    />
  </Box>
);

export default PriceBox;
