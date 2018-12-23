import React from 'react';

import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import PriceContainer from './containers/PriceContainer';
import Dashboard2Container from './containers/Dashboard2Container';

const routes = [
  {
    path: '/',
    exact: true,
    Component: () => <RootRedirector to="/home" />,
  },
  {
    path: '/dashboard2',
    displayName: 'Dashboard 2',
    exact: true,
    Component: Dashboard2Container,
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
