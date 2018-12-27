import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const InputField = ({ 
  placeholder, 
  autoComplete, 
  input, 
  type,
}) => {
  return (
    <Input
      { ...input }
      placeholder={ placeholder }
      type={ type }
      autoComplete={ autoComplete }
    />
  );
};

const propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
};

InputField.propTypes = propTypes;