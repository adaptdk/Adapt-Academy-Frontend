import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../base/Box';
import paragraphImg from '../../assets/wireframes/paragraph.png';

const HomeBox3 = () => (
  <Box>
    <div className="home-box__header home-box__header--right-link">
      <h3>Home dashboard 3</h3>
      <Link to="dashboard3">See more</Link>
    </div>
    <div className="divider margin--small-bottom" />
    <img
      className="home__wireframe-img"
      src={ paragraphImg }
    />
  </Box>
);

export default HomeBox3;
