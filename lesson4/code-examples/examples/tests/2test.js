async function getCountries() {
  let code = "";
  const countries = await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true");
  const json = await countries.json();
  code = json[0].alpha2Code;
  const phone = await fetch("http://country.io/phone.json");
  const json2 = await phone.json();
  console.log(json2[code]);
}

getCountries();