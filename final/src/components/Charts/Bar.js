import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const BarChart = ({ data, title }) => {
  return (
    <Bar
      data={ {
        labels: data.xAxis,
        datasets:[
          {
            label: 'Volume',
            data: data.yAxis,
            backgroundColor: 'rgba(54, 81, 255, 0.6)',
          }
        ]
      } }
      options={ {
        title:{
          display: true,
          text: title,
          fontSize: 25
        },
        legend:{
          display: false,
          position: 'top'
        }
      } }
    />
  );
};


const propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};

BarChart.propTypes = propTypes;

export default BarChart;