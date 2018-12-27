import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({ 
  dateFormat, 
  type, 
  input, 
  maxDate,
  minDate,
}) => {
  return (
    <DatePicker
      { ...input }
      type={ type }
      selected={ new Date(input.value) }
      dateFormat={ dateFormat }
      maxDate={ maxDate }
      minDate={ minDate }
    /> 
  );
};

DatePickerField.propTypes = {
  dateFormat: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.string,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
};
