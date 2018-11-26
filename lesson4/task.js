// 1 Task

let countries = [ 
  {"name": "Afghanistan", "code": "AF"}, 
  {"name": "Åland Islands", "code": "AX"}, 
  {"name": "Albania", "code": "AL"}, 
  {"name": "Algeria", "code": "DZ"}
];

const getCountryByCode = countryCode => {
  return countries.filter(({ code }) => code === countryCode);
}

console.log(getCountryByCode('AL'));


// 2 Task

async const getCountries = () => {
  let res = await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true");
  let json = await res.json();
  let code = json[0].alpha2Code;

  let res2 = await fetch("http://country.io/phone.json");
  let json2 = await res2.json();

  console.log(code);
  console.log(json2[code]);
}


// 3 Task

let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const getTotalScore = () => {
  let total = 0;
  personnel.forEach(person => {
    if (person.isForceUser) {
      total += person.pilotingScore;
      total += person.shootingScore;
    }
  });
  return total;
}

console.log(getTotalScore()); // 420