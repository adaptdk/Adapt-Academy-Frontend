import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { getExchanges, updateExchanges } from '../actions';
import Box from '../components/base/Box';
import ExchangesChart from '../components/Dashboard2/ExchangesChart';

class Dashboard2Container extends Component {
  state = {
    title: '',
    currencyType: '',
    cryptoType: 'BTC',
    timePeriod: 'histoday',
    to: '',
    limit: 120
  };

  static propTypes = {
    getExchanges: PropTypes.func.isRequired,
    updateExchanges: PropTypes.func.isRequired,
    exchanges: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { getExchanges } = this.props;
    getExchanges();
  }

  newTimestamp = e => {
    let myDate= e.target.value;
    this.setState({ to: moment(myDate).unix()});
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    const { updateExchanges } = this.props;
    const { currencyType, timePeriod, to, limit } =this.state;
    e.preventDefault();
    updateExchanges(currencyType, timePeriod, to, limit);
    console.log(this.state);
  };

  render() {
    const {
      exchanges: { data }
    } = this.props;

    console.log(data);
    return (
      <div className='dashboard2'>
        <nav className='dashboard2__section dashboard2__section--left-link margin--small-bottom'>
          <Link to='home'>Go back</Link>
        </nav>
        <section>
          <form
            className='pure-form pure-form-aligned'
            onSubmit={ this.onSubmit }
          >
            <div className='pure-control-group'>
              <label htmlFor='chart-name'>New chart name</label>
              <input
                id='chart-name'
                name='title'
                type='text'
                placeholder='Enter a new name'
                onChange={ this.onChange }
              />
            </div>
            <div className='pure-control-group'>
              <label htmlFor='currency-dropdown'>
                Select your currency of interest
              </label>
              <select id='currency-dropdown'  name='currencyType' onChange={ this.onChange }>
                <option
                  value='EUR'
                >
                  EUR
                </option>
                <option
                  value='USD'
                >
                  USD
                </option>
              </select>
            </div>
            { /* <div className='pure-control-group'>
              <label htmlFor='date-from'>Date from</label>
              <input
                id='date-from'
                name='dateFrom'
                type='date'
                onChange={this.onChange}
              />
            </div> */ }
            <div className='pure-control-group'>
              <label htmlFor='date-to'>Date to</label>
              <input
                id='date-to'
                name='to'
                type='date'
                onChange={ this.newTimestamp }
              />
            </div>
            <input
              type='submit'
              value='submit'
              className='dashboard2__submit-btn pure-button pure-button-primary'
            />
          </form>
        </section>
        <Box>
          <div className='dashboard2__title-chart'>{ this.state.title }</div>
          <ExchangesChart data={ data } />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exchanges: state.exchanges
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getExchanges,
      updateExchanges
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard2Container);
