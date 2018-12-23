import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const DropdownField = ({ placeholder, option, input, type }) => {
  return (
    <Dropdown 
      { ...input }
      onChange={ (param, data) => input.onChange(data.value) }
      type={ type }
      placeholder={ placeholder } 
      fluid 
      selection 
      options={ option } 
    />
  );
};

const propTypes = {
  placeholder: PropTypes.string,
  option: PropTypes.object,
  input: PropTypes.object,
  type: PropTypes.string,
};

DropdownField.propTypes = propTypes;