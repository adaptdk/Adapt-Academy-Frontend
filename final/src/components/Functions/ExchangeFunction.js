import { DATE_FORMAT_CHART } from '../../constants/options';
import moment from 'moment';

export const filterExchangeData = data => {
  let xAxis = []; // Time
  let yAxis = []; // Value

  for (let i = 0; i < data.length; i++) {
    const time = new Date(data[i].time * 1000);
    xAxis.push(moment(time).format(DATE_FORMAT_CHART));
    yAxis.push(data[i].volume);
  }

  return { xAxis, yAxis };
};