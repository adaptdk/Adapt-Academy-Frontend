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
      <div className="dashboard2">
        <div className="dashboard2__section dashboard2__section--left-link margin--small-bottom">
          <Link to="home">Go back</Link>
        </div>
        <Box>
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
