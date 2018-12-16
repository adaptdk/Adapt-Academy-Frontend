import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { take, map } from 'lodash';

import Columns from '../components/base/Columns';
import { TWO_COLUMNS_LAYOUTS } from '../constants/layouts';
import { bindActionCreators } from 'redux';
import { getExchanges } from '../actions';
import connect from 'react-redux/es/connect/connect';
import moment from 'moment';

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
    const { exchanges } = this.props;
    const data = take(exchanges.data, 10);

    return (
      <div className="dashboard2">
        <div className="dashboard2__section dashboard2__section--left-link margin--small-bottom">
          <Link to="home">Go back</Link>
        </div>
        <Columns
          options={ TWO_COLUMNS_LAYOUTS }
        >
          <ul>
            {
              map(data, ({ time, volume }, index) => (
                <li key={ index }>
                  { `${moment.unix(time).format('YYYY-MM-DD h:mm a')} - ${volume}` }
                </li>
              ))
            }
          </ul>
        </Columns>
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
