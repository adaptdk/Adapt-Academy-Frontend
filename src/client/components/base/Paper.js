import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

const defaultProps = {
  className: '',
  noPadding: false,
};

const Paper = (props) => {
  const { children, className, noPadding } = props;
  return (
    <div className={ classNames(className, 'paper', { 'paper--no-padding': noPadding }) }>
      { children }
    </div>
  );
};

Paper.propTypes = propTypes;
Paper.defaultProps = defaultProps;

export default Paper;
