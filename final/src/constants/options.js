// Price.js

export const timeIntervalPrice = [ 
  { key: 'minute', value: 'histominute 10', text: 'Every 10 Minutes' },
  { key: 'hour', value: 'histohour 3', text: 'Every 3 hours' },
  { key: 'day', value: 'histoday 1', text: 'Every Day' },
];

export const cryptoCurrencyPrice = [ 
  { key: 'BTC', value: 'BTC', text: 'BTC' },
  { key: 'ETH', value: 'ETH', text: 'ETH' },
];

export const currencyPrice = [ 
  { key: 'USD', value: 'USD', text: 'USD' },
  { key: 'EUR', value: 'EUR', text: 'EUR' },
];

export const limitPrice = 15;

export const initialValuesPrice = {
  timeInterval: 'histoday 1',
  cryptoCurrency: 'BTC',
  currency: 'USD',
};

// Exchange.js

export const DATE_FORMAT = 'dd MMM yyyy';
export const DATE_FORMAT_CHART = 'MMM DD';

export const currencyExchange = [ 
  { key: 'USD', value: 'USD', text: 'USD' },
  { key: 'EUR', value: 'EUR', text: 'EUR' },
];

export const initialValuesExchange = {
  title: 'Bar Chart',
  currency: 'USD',
  from: new Date().setDate(new Date().getDate() - 10),
  to: new Date(),
};

//