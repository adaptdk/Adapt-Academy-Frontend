import React from 'react';

import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import Dashboard1Container from './containers/Dashboard1Container';
import Dashboard2Container from './containers/Dashboard2Container';
import Dashboard3Container from './containers/Dashboard3Container';

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
    path: '/dashboard1',
    displayName: 'Dashboard 1',
    exact: true,
    Component: Dashboard1Container,
  },
  {
    path: '/dashboard2',
    displayName: 'Dashboard 2',
    exact: true,
    Component: Dashboard2Container,
  },
  {
    path: '/dashboard3',
    displayName: 'Dashboard 3',
    exact: true,
    Component: Dashboard3Container,
  },
];

export default routes;
