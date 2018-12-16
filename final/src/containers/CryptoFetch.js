 const CryptoData = async () => {
  const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR';
  return fetch(url)
  .then(response => response.json())
  .then(resp => resp)
  .catch(error => document.querySelector('body').textContent = `Cannot get the data`);
};
console.log(CryptoData());

const showData = async () => {
  let result = await CryptoData();
  return result;
}
export default CryptoData;