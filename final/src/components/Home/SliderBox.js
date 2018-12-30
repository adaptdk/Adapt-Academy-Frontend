import React from 'react';
import CarouselWidget from '../CarouselWidget/CarouselWidget';

import Box from '../base/Box';



const SliderBox = () => (
  <Box>
    <div className="home-box__header">
      <h3>Slider</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <CarouselWidget />
  </Box>
);

export default SliderBox;
