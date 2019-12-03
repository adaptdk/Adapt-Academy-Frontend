const endpoint = 'https://api.gdax.com/products/BTC-USD/book'

const fetchPrices = (endpoint) => {
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return response.json();
    })
    .then(prices => {
      prices.bids.forEach(price => console.log(price));
      prices.asks.forEach(price => console.log(price));
    })
    .catch(err => console.log('Error message:', err));
}
fetchPrices(endpoint);