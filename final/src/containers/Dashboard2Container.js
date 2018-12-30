import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import { bindActionCreators } from 'redux';
import { getExchanges } from '../actions';
import Box from '../components/base/Box';
import ExchangesChart from '../components/Dashboard2/ExchangesChart';

class Dashboard2Container extends Component {
  static propTypes = {
    getExchanges: PropTypes.func.isRequired,
    exchanges: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { getExchanges } = this.props;
    getExchanges();
  }

  render() {
    const { exchanges: { data} } = this.props;

    return (
      <div className='dashboard2'>
        <nav className='dashboard2__section dashboard2__section--left-link margin--small-bottom'>
          <Link to='home'>Go back</Link>
        </nav>
        <section>
          <form className='pure-form pure-form-aligned'>
            <div className='pure-control-group'>
              <label htmlFor='chart-name'>New chart name</label>
              <input id='chart-name' type='text' placeholder='Enter a new name' />
            </div>
            <div className='pure-control-group'>
              <label htmlFor='currency-dropdown'>Select your currency of interest</label>
              <select id='currency-dropdown'>
                <option value='EUR'>EUR</option>
                <option value='USD'>USD</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <label htmlFor='date-from'>Date from</label>
              <input id='date-from' type='date' value=''/>
            </div>
            <div className='pure-control-group'>
              <label htmlFor='date-to'>Date to</label>
              <input id='date-to' type='date' value=''/>
            </div>
            <button type='submit' className='dashboard2__submit-btn pure-button pure-button-primary'>Submit</button>
          </form>
        </section>
        <Box>
          <div className='dashboard2__title-chart'>Title</div>
          <ExchangesChart data={ data }/>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  exchanges: state.exchanges,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getExchanges,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard2Container);
