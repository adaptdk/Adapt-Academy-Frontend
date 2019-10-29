import React from 'react';
import paragraphImg from '../../assets/wireframes/paragraph.png';

const VideoText = () => (
  <div className="box--padding">
    <div className="home-box__header">
      <h3>Some video text</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <img
      className="home__wireframe-img"
      src={ paragraphImg }
    />
  </div>
);

export default VideoText;
