import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import Columns from '../components/base/Columns';
import { TWO_COLUMNS_LAYOUTS } from '../constants/layouts';
// import Dashboard1Box1 from '../components/Dashboard1/Dashboard1Box1';
import Dashboard1Box2 from '../components/Dashboard1/Dashboard1Box2';
import Dashboard1Box3 from '../components/Dashboard1/Dashboard1Box3';
import { getPrices } from '../actions/pricesActions';

class Dashboard1Container extends Component {
  static propTypes = {
    getPrices: PropTypes.func.isRequired,
    prices: PropTypes.shape({
      data: PropTypes.array.isRequired,
    })
  };

  componentDidMount() {
    const { getPrices } = this.props;

    getPrices();
  }

  render() {
    const { prices: { data } } = this.props;

    return (
      <div className="dashboard1">
        <div className="dashboard1__section dashboard1__section--left-link margin--small-bottom">
          <Link to="home">Go back</Link>
        </div>
        <Columns>
          <ul>
            {
              map(data, ({ close }, index) => (
                <li key={ index }>
                  { close }
                </li>
              ))
            }
          </ul>
        </Columns>
        <Columns
          options={ TWO_COLUMNS_LAYOUTS }
        >
          <Dashboard1Box2 />
          <Dashboard1Box3 />
        </Columns>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prices: state.prices,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPrices
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard1Container);
