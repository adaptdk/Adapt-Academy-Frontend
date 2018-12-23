// Price.js

export const timeInterval = [ 
  { key: 'minute', value: 'histominute 10', text: 'Every 10 Minutes' },
  { key: 'hour', value: 'histohour 3', text: 'Every 3 hours' },
  { key: 'day', value: 'histoday 1', text: 'Every Day' },
];

export const cryptoCurrency = [ 
  { key: 'BTC', value: 'BTC', text: 'BTC' },
  { key: 'ETH', value: 'ETH', text: 'ETH' },
];

export const currency = [ 
  { key: 'USD', value: 'USD', text: 'USD' },
  { key: 'EUR', value: 'EUR', text: 'EUR' },
];

export const limitPrice = 10;

export const initialValuesPrice = {
  timeInterval: 'histohour 3',
  cryptoCurrency: 'BTC',
  currency: 'USD',
};

// 