1
=======
```
[ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "Åland Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}
]
```



Write function to which will get getCountryByCode('DZ');     Use array functions

2
=======
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

3
=======
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

3
=======
Write a prototype based counter which has methods `start()`, `stop()`, `resume()` and `reset()`.
`start()` method will receive a time parameter with format `hh:mm:ss` which as example is `00:01:10`.
It will count up to the given time and then it will stop automatically. If parameter is not supplied then it will count indefinitely.
If poorly formmatted time string will be supplied to the method it will throw an error.
`stop()` will stop (pause) the counter.
`resume()` will start counting once again from the time value it has stopped on.
`reset()` will reset time to 0.

A counter constructor will receive a formatted time parameter `hh:mm:ss` which we will use as a start time to start counting from.


https://medium.com/@habibridho/javascript-es7-async-await-tutorial-64275c81ce2e
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
