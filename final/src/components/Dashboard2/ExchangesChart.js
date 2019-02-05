import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-c3-component';
import 'c3/c3.css';

const propTypes = {
  data: PropTypes.array.isRequired,
};

const ExchangesChart = ({ data }) => (
  <div className="dashboard2__chart">
    <Chart
      config={ {
        data: {
          json: data,
          keys: {
            x: 'time',
            value: ['volume'],
            type:'bar'
          },
        },
        axis: {
          x: {
            type: 'category'
          }
        },
      } }/>
  </div>
);

ExchangesChart.propTypes = propTypes;

export default ExchangesChart;


