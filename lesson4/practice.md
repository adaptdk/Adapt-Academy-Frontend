

```
let data = [ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "Åland Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}
]
```

Write function to which will get getCountryByCode('DZ');     Use array functions

let getCountryByCode = (code) => {
  let filteredArr = data.filter((el) => {
     return (el.code === code);
  });
  return filteredArr;
};

console.log(getCountryByCode('AL'));

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

reduce
Rewrite function using es7 await / async 

<!-- let getCountries = () => {
  let code = "";
  fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true")
  .then((res) => { return res.json()})
  .then((json) => {
      code = json[0].alpha2Code
      return fetch("http://country.io/phone.json")
  })
  .then((res2) => { return res2.json();})
  .then((json2) => {
      console.log(json2[code]);
  })
}  -->

const getCountries = async () => {
  let response = await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true")
  let json = await response.json();
  let codeF = json[0].alpha2Code;
  let response2 = await fetch('http://country.io/phone.json');
  let json2 = await response2.json(); 
  console.log(json2[codeF]);
}
getCountries(); // 62


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


let isForceUserArr = personnel.filter((el) => {
  return el.isForceUser === true;
});

let forceArr = isForceUserArr.map((el) => {
  return el.shootingScore + el.pilotingScore;
});

let forceScore = forceArr.reduce((acc, cur) => acc + cur);


https://medium.com/@habibridho/javascript-es7-async-await-tutorial-64275c81ce2e
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
