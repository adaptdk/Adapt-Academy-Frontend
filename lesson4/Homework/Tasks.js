var personnel = [{
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

const countries = [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Åland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" }
];

// Task 1
function getCountryByCode(code) {
    return countries.find(country => country.code == code);
}
console.log(getCountryByCode("DZ"));

// Task 2
// var fetch = require("node-fetch");

// async function getCountries() {
//     let code = ""
//     await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true").then(async function(res) {
//         return res.json()
//     }).then(async function(json) {
//         code = json[0].alpha2Code
//         console.log(json);
//         return await fetch("http://country.io/phone.json", { mode: 'no-cors' })
//     }).then(function(res2) {
//         return res2.json()
//     }).then(function(json2) {
//         console.log(json2[code])
//     })
// }

// console.log(getCountries());

// Task 3
function getForcedUsersCount() {
    return personnel.filter(person => person.isForceUser == true).length;
}

console.log(getForcedUsersCount());