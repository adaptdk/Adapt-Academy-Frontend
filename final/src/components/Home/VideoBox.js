import React from 'react';
import Box from '../base/Box';
import videoCrypto from '../../assets/VideoCrypto.mp4';

const VideoBox = () => (
  <Box>
    <div className="home-box__header">
      <h3>About Cryptocurrency</h3>
    </div>
    <div className="video-divider divider margin--small-bottom">
      <video 
        className="video-divider__frame" 
        width="757" 
        height="420" 
        controls
      >
        <source src={ videoCrypto } type="video/mp4" />
      </video>
    </div>
  </Box>
);

export default VideoBox;
