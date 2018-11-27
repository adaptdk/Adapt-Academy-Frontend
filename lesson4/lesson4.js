// ================================================================================

var countryArr = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" }
];

// Write function to which will get getCountryByCode('DZ'); Use array functions

// function getCountryByCode(code) {
//   for (let i = 0; i < newArr.length; i++) {
//     return countryCode = newArr.filter(country => country.code == code);
//   }
// }
const getCountryByCode = codeP =>
  (countryCode = countryArr.filter(({ code }) => code === codeP));

console.log(getCountryByCode("DZ"));

// ================================================================================

// var fetch = require("node-fetch");

// function getCountries() {
//   let code = "";
//   fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(json) {
//       code = json[0].alpha2Code;
//       return fetch("http://country.io/phone.json");
//     })
//     .then(function(res2) {
//       return res2.json();
//     })
//     .then(function(json2) {
//       console.log(json2[code]);
//     });
// }

// getCountries();
// // Rewrite function using es7 await / async

async function getCountriesA() {
  let res = await fetch(
    "https://restcountries.eu/rest/v2/name/Indonesia?fullText=true"
  );
  let json = await res.json();

  let code = json[0].alpha2Code;

  let res2 = await fetch("http://country.io/phone.json"); //doesn't work due to CORS
  json2 = await res2.json();
  console.log(code);
  console.log(json2[code]);
}
getCountriesA();

// ========================================================================

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

// Our objective: get the total score of force users only. Let’s do it step by step!
// https://medium.com/@habibridho/javascript-es7-async-await-tutorial-64275c81ce2e
//  https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

function totalScoreOfForceUsers() {
  var forceUsers = personnel.filter(
    forceSensitive => forceSensitive.isForceUser
  );
  const totalScore = forceUsers.map(
    user => user.pilotingScore + user.shootingScore
  );
  console.log(totalScore);
}
totalScoreOfForceUsers();
