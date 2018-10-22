import React from 'react';

import Columns from '../components/base/Columns';
import { TWO_COLUMNS_LAYOUTS } from '../constants/layouts';
import HomeBox1 from '../components/Home/HomeBox1';
import HomeBox2 from '../components/Home/HomeBox2';
import HomeBox3 from '../components/Home/HomeBox3';
import HomeBox4 from '../components/Home/HomeBox4';

const HomeContainer = () => (
  <Columns
    className="home"
    options={ TWO_COLUMNS_LAYOUTS }
    fill
  >
    <HomeBox1 />
    <HomeBox2 />
    <HomeBox3 />
    <HomeBox4 />
  </Columns>
);

export default HomeContainer;
