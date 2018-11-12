```
[ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "Åland Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}
]
```



Write function to which will get getCountryByCode('DZ');     Use array functions


```
var fetch = require("node-fetch")

function getCountries() {
  let code = ""
  fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true").then(function(res) {
    return res.json()
  }).then(function(json) {
    code = json[0].alpha2Code
    return fetch("http://country.io/phone.json")
  }).then(function(res2) {
    return res2.json()
  }).then(function(json2) {
    console.log(json2[code])
  })
}

getCountries()
```

Rewrite function using es7 await / async 


```
var personnel = [
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
```
Our objective: get the total score of force users only. Let’s do it step by step!




https://medium.com/@habibridho/javascript-es7-async-await-tutorial-64275c81ce2e
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
