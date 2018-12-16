const getCountries = async () => {
    let response = await fetch("https://restcountries.eu/rest/v2/name/Indonesia?fullText=true")
    let json = await response.json();
    let codeF = json[0].alpha2Code;
    let response2 = await fetch('http://country.io/phone.json');
    let json2 = await response2.json();
    console.log(json2[codeF]);
}

getCountries();