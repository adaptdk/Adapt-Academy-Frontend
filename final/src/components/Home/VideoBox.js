import React from 'react';
import paragraphImg from '../../assets/wireframes/paragraph.png';

import Box from '../base/Box';

const VideoBox = () => (
  <Box>
    <div className="home-box__header">
      <h3>Video Box</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <img
      className="home__wireframe-img"
      src={ paragraphImg }
    />
  </Box>
);

export default VideoBox;
