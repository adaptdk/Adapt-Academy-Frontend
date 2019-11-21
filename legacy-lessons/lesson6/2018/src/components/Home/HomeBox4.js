import React from 'react';

import Box from '../base/Box';
import paragraphImg from '../../assets/wireframes/paragraph.png';

const HomeBox4 = () => (
  <Box>
    <div className="home-box__header">
      <h3>Home news</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <img
      className="home__wireframe-img"
      src={ paragraphImg }
    />
  </Box>
);

export default HomeBox4;
