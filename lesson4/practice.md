1
```
[ 
{"name": "Afghanistan", "code": "AF"}, 
{"name": "Åland Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}
]
```



Write function to which will get getCountryByCode('DZ');     Use array functions

2.
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
