import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Columns from '../components/base/Columns';
import {
  TWO_COLUMNS_60_40_LAYOUT,
  TWO_COLUMNS_LAYOUTS,
} from '../constants/layouts';
import VideoBox from '../components/Home/VideoBox';
import VideoText from '../components/Home/VideoText';
import PriceBox from '../components/Home/PriceBox';
import HistoricalBox from '../components/Home/HistoricalBox';
import SliderBox from '../components/Home/SliderBox';

import { fetchCryptoData } from '../actions';

class HomeContainer extends PureComponent {
  static propTypes = {
    fetchCryptoData: PropTypes.func,
    cryptoData: PropTypes.object,
  };

  componentDidMount() {
    const { fetchCryptoData } = this.props;
    fetchCryptoData();
  }

  render() {

    return (
      <div className="home">
        <Columns
          options={ TWO_COLUMNS_60_40_LAYOUT }
          fill
        >
            <VideoBox />
            <VideoText />

        </Columns>
        <Columns
          options={ TWO_COLUMNS_LAYOUTS }
          fill
        >
          <PriceBox />
          <HistoricalBox />
        </Columns>
        <SliderBox />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cryptoData: state.cryptoData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchCryptoData 
  }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
