import React, { Component } from 'react';
import Select from 'react-select';
import {
  popularCoins,
  timeIntervals,
  currencies,
} from '../../constants/Dashboard1Constants/data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getData, setCurrency } from '../../actions/pricePageActions';

class Dashboard1Form extends Component {
  state = {
    timeInterval: { value: '3hour', label: '3 hours' },
    cryptoCurrency: { value: 'BTC', label: 'BTC' },
    currency: { value: 'EUR', label: 'EUR' },
  };

  onSubmit = e => {
    e.preventDefault();
    const { timeInterval, cryptoCurrency, currency } = this.state;
    const aggregate = timeInterval.value.match(/\d+/g)[0];
    const interval = timeInterval.value.match(/[a-zA-Z]+/g)[0];

    this.props.actions.getData(
      interval,
      cryptoCurrency.value,
      currency.value,
      aggregate,
    );

    this.props.actions.setCurrency(this.state.currency.value);
  };

  handleChange = (name, selectedOption) => {
    this.setState({
      [name]: selectedOption,
    });
  };

  render() {
    const { timeInterval, cryptoCurrency, currency } = this.state;

    return (
      <form onSubmit={ this.onSubmit }>
        <label>
          Time interval:
          <Select
            defaultValue={ timeIntervals[1] }
            value={ timeInterval }
            onChange={ timeInterval =>
              this.handleChange('timeInterval', timeInterval) }
            options={ timeIntervals }
            isSearchable={ false }
          />
        </label>
        <label>
          CryptoCurrency:
          <Select
            defaultValue={ popularCoins[0] }
            value={ cryptoCurrency }
            onChange={ cryptoCurrency =>
              this.handleChange('cryptoCurrency', cryptoCurrency) }
            options={ popularCoins }
            isSearchable={ false }
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </label>
        <label>
          Currency:
          <Select
            defaultValue={ currencies[1] }
            value={ currency }
            onChange={ currency => this.handleChange('currency', currency) }
            options={ currencies }
            isSearchable={ false }
          />
        </label>
        <button type="submit">See price</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getData,
      setCurrency,
    },
    dispatch,
  ),
});

Dashboard1Form.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard1Form);
