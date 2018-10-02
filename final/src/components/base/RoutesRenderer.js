import React from 'react';
import {
  oneOfType,
  string,
  bool,
  node,
  func,
  object,
  array,
} from 'prop-types';
import { Route } from 'react-router-dom';

const propTypes = {
  path: string,
  exact: bool,
  Component: oneOfType([
    node,
    func,
  ]).isRequired,
  routes: array,
  context: object,
};

const defaultProps = {
  path: null,
  exact: false,
  routes: [],
  context: {},
};

const RoutesRenderer = ({
  path,
  routes,
  context,
  Component,
}) => (
  <Route
    path={ path }
    render={ props => (
      React.cloneElement(
        <Component
          { ...props }
          routes={ routes }
          context={ context }
        />,
      )
    ) }
  />
);

RoutesRenderer.propTypes = propTypes;
RoutesRenderer.defaultProps = defaultProps;

export default RoutesRenderer;
