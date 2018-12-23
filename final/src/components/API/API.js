import { limitPrice } from '../../constants/options';

export const getPrices = ({ currency, cryptoCurrency, timeInterval }) => {
  const limitIndentifier = timeInterval.split(' ')[1];
  const time = timeInterval.split(' ')[0];
  
  return fetch(`https://min-api.cryptocompare.com/data/${time}?fsym=${cryptoCurrency}&tsym=${currency}&limit=${limitIndentifier * limitPrice}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response !== 'Success') console.error('Something went wrong! Please try again');
      else return { data, limitIndentifier };
    })
    .catch(() => {
      console.error('Something went wrong! Please try again');
    });
};