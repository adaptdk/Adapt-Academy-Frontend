import React from 'react';

import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import Dashboard1Container from './containers/Dashboard1Container';
import Dashboard2Container from './containers/Dashboard2Container';

const routes = [
  {
    path: '/',
    exact: true,
    Component: () => <RootRedirector to="/home" />,
  },
  {
    path: '/home',
    displayName: 'Home',
    exact: true,
    Component: HomeContainer,
  },
  {
    path: '/prices',
    displayName: 'Prices',
    exact: true,
    Component: Dashboard1Container,
  },
  {
    path: '/crypto_volumes',
    displayName: 'Exchange volume',
    exact: true,
    Component: Dashboard2Container,
  },
];

export default routes;
