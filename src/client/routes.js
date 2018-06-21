import React from 'react';
import RootRedirector from './components/base/RootRedirector';
import HomeContainer from './containers/HomeContainer';

const routes = [
  {
    path: '/',
    displayName: 'Root',
    exact: true,
    Component: () => <RootRedirector to="/home" />,
  },
  {
    path: '/home',
    displayName: 'Welcome to Adapt',
    exact: true,
    Component: HomeContainer,
  },
];

export default routes;
