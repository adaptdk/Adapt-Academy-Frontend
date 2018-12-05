import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({ title }) => (
  <p>{ title }</p>
);

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
