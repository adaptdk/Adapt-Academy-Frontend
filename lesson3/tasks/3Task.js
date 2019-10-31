function loadBitcoin(path) {
    return fetch(path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        return response.json();
      })
      .then(bitcoin => {
            console.log(`Current bitcoin price is: ${bitcoin.asks[0][0]}`);
      })
      .catch(err => console.log('Error message:', err));
  }

  loadBitcoin('https://api.gdax.com/products/BTC-USD/book');