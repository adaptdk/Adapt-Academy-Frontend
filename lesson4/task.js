let countries = [ 
  {"name": "Afghanistan", "code": "AF"}, 
  {"name": "Åland Islands", "code": "AX"}, 
  {"name": "Albania", "code": "AL"}, 
  {"name": "Algeria", "code": "DZ"}
];

const getCountryByCode = countryCode => {
  return countries.filter(({ code }) => code == countryCode);
}

console.log(getCountryByCode('AL'));