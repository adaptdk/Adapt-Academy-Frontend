import React from 'react';
import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import TodoContainer from './containers/TodoContainer';

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
  {
    path: '/todo',
    displayName: 'To do',
    exact: true,
    Component: TodoContainer,
  },
];

export default routes;
