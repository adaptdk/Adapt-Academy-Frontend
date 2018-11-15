const array = [
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"}
];
const getCountryByCode = (code) =>{ let output =  array.filter( item => code == item.code )
  console.log(output[0].name);
};

getCountryByCode('DZ');