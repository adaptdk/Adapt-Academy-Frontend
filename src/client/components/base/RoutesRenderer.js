import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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

RoutesRenderer.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  routes: PropTypes.array,
  context: PropTypes.object,
};

RoutesRenderer.defaultProps = {
  routes: [],
  context: {},
};

export default RoutesRenderer;
