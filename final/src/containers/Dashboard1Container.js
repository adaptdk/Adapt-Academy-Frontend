import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Columns from '../components/base/Columns';
import {
  defaultGetPricesParams,
  getPrices,
  updatePrices,
  updatePricesForm
} from '../actions/pricesActions';
import Box from '../components/base/Box';
import TableView from '../components/Dashboard1/TableView';
import UpdateForm from '../components/Dashboard1/UpdateForm';

class Dashboard1Container extends PureComponent {
  static propTypes = {
    getPrices: PropTypes.func.isRequired,
    updatePrices: PropTypes.func.isRequired,
    updatePricesForm: PropTypes.func.isRequired,
    prices: PropTypes.shape({
      data: PropTypes.array.isRequired,
      timeFrequency: PropTypes.number.isRequired,
      cryptoType: PropTypes.string.isRequired,
    }).isRequired
  };

  componentDidMount() {
    const { getPrices, prices: { timeFrequency } } = this.props;

    if (timeFrequency >= 60) {
      getPrices({ ...defaultGetPricesParams, timePeriod: 'histohour'});
    } else {
      getPrices({ ...defaultGetPricesParams, timePeriod: 'histominute'});
    }
  }

  onFormChange = (type, value) => {
    const { updatePrices, updatePricesForm } = this.props;
    const { cryptoType, timeFrequency } =  { ...this.props.prices, [type]: value };
    updatePricesForm({ cryptoType, timeFrequency: parseInt(timeFrequency, 10) });
    updatePrices({ cryptoType, timeFrequency });
  };

  render() {
    const { prices: { data, timeFrequency, cryptoType } } = this.props;

    return (
      <div className="dashboard1">
        <div className="dashboard1__section dashboard1__section--left-link margin--small-bottom">
          <Link to="home">Go back</Link>
        </div>
        <Columns>
          <Box>
            <UpdateForm
              onChange={ this.onFormChange }
              cryptoType={ cryptoType }
              timeFrequency={ timeFrequency }
            />
            <TableView data={ data }/>
          </Box>
        </Columns>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prices: state.prices,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPrices,
  updatePrices,
  updatePricesForm,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard1Container);
