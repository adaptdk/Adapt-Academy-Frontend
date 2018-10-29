import React from 'react';

import Columns from '../components/base/Columns';
import {
  TWO_COLUMNS_60_40_LAYOUT,
  THREE_COLUMNS_EQUAL_LAYOUT,
} from '../constants/layouts';
import VideoBox from '../components/Home/VideoBox';
import VideoText from '../components/Home/VideoText';
import PriceBox from '../components/Home/PriceBox';
import HistoricalBox from '../components/Home/HistoricalBox';
import TopListBox from '../components/Home/TopListBox';
import SliderBox from '../components/Home/SliderBox';

const HomeContainer = () => (
  <div className="home">
    <Columns
      options={ TWO_COLUMNS_60_40_LAYOUT }
      fill
    >
      <VideoBox />
      <VideoText />
    </Columns>
    <Columns
      options={ THREE_COLUMNS_EQUAL_LAYOUT }
      fill
    >
      <PriceBox />
      <HistoricalBox />
      <TopListBox />
    </Columns>
    <SliderBox />
  </div>
);

export default HomeContainer;
