import React from 'react';

import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import PriceContainer from './containers/PriceContainer';
import ExchangeContainer from './containers/ExchangeContainer';

const routes = [
  {
    path: '/',
    exact: true,
    Component: () => <RootRedirector to="/home" />,
  },
  {
    path: '/exchange',
    displayName: 'Exchange',
    exact: true,
    Component: ExchangeContainer,
  },
  {
    path: '/price',
    displayName: 'Price',
    exact: true,
    Component: PriceContainer,
  },
  {
    path: '/home',
    displayName: 'Home',
    exact: true,
    Component: HomeContainer,
  },
];

export default routes;
