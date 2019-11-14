
//                    Adapt Academy 2019 lesson 04 - JS | task 02 by Donatas Dereškevičius  


  const getCountries = async() => {

      try {
          let res = await fetch ('https://restcountries.eu/rest/v2/name/Indonesia?fullText=true');
          let json = await res.json();
          let code = json[0].alpha2Code;
          document.querySelector(".result").innerHTML = code;
          let res2 = await fetch('http://country.io/phone.json', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // included, no-credentials
            headers: {
              'Content-Type': 'Access-Control-Allow-Origin: *'
              // 'Conno-tent-Type': 'application/x-www-form-urlencoded', text/plain
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(code) // body data type must match "Content-Type" header
          });
          let json2 = await res2.json();
          document.querySelector(".result").innerHTML = json2[code];
      } catch (error) {
          console.error ('Error: ', error.message);
      }
  }

  getCountries();