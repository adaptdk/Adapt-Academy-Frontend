import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  timeFrequency: PropTypes.number.isRequired,
  cryptoType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const UpdateForm = ({ timeFrequency, cryptoType, onChange }) => {
  const handleChange = (type) => (e) => {
    if (onChange) {
      onChange(type, e.target.value);
    }
  } ;

  return (
    <div className="pure-form dashboard1__form margin--small-bottom">
      <label htmlFor="timeFrequency">Choose interval:</label>
      <select
        name="timeFrequency"
        id="timeFrequency"
        value={ timeFrequency }
        onChange={ handleChange('timeFrequency') }
      >
        <option value="5">Every 5 minutes</option>
        <option value="10">Every 10 minutes</option>
        <option value="60">Every 1 hour</option>
        <option value="180">Every 3 hour</option>
        <option value="300">Every 5 hour</option>
      </select>
      <label htmlFor="cryptoType">Choose crypto currency:</label>
      <select
        name="cryptoType"
        id="cryptoType"
        value={ cryptoType }
        onChange={ handleChange('cryptoType') }
      >
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Etherum</option>
      </select>
    </div>
  );
};

UpdateForm.propTypes = propTypes;

export default UpdateForm;
