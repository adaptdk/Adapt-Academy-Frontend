// 1. Write function getZodiacSign(day, month) which will return zodiac sign depending on input.

//    Dates for concrete zodiac sign can be found in https://www.horoscopedates.com/zodiac-signs/

function getZodiacSign(day, month) {
  if (month < 1 || month > 12) {
    return "Month not available!";
  }
  if (
    (month === 1 && day >= 20 && day <= 31) ||
    (month === 2 && day >= 1 && day <= 18)
  ) {
    return "Aquarius";
  } else if (
    (month === 2 && day >= 18 && day <= 29) ||
    (month === 3 && day >= 1 && day < 20)
  ) {
    return "Pisces";
  } else if (
    (month === 3 && day >= 20 && day <= 31) ||
    (month === 4 && day >= 1 && day < 20)
  ) {
    return "Aries";
  } else if (
    (month === 4 && day >= 20 && day <= 30) ||
    (month === 5 && day >= 1 && day < 21)
  ) {
    return "Taurus";
  } else if (
    (month === 5 && day >= 21 && day <= 31) ||
    (month === 6 && day >= 1 && day < 21)
  ) {
    return "Gemini";
  } else if (
    (month === 6 && day >= 21 && day <= 30) ||
    (month === 7 && day >= 1 && day < 23)
  ) {
    return "Cancer";
  } else if (
    (month === 7 && day >= 23 && day <= 31) ||
    (month === 8 && day >= 1 && day < 23)
  ) {
    return "Leo";
  } else if (
    (month === 8 && day >= 23 && day <= 31) ||
    (month === 9 && day >= 1 && day < 23)
  ) {
    return "Virgo";
  } else if (
    (month === 9 && day >= 23 && day <= 30) ||
    (month === 10 && day >= 1 && day < 23)
  ) {
    return "Libra";
  } else if (
    (month === 10 && day >= 23 && day <= 31) ||
    (month === 11 && day >= 1 && day < 22)
  ) {
    return "Scorpio";
  } else if (
    (month === 11 && day >= 22 && day <= 31) ||
    (month === 12 && day >= 1 && day < 22)
  ) {
    return "Sagittarius";
  } else if (
    (month === 12 && day >= 22 && day <= 30) ||
    (month === 1 && day >= 1 && day < 20)
  ) {
    return "Capricorn";
  } else {
    return "Zodiac sign for given date not exists!";
  }
}

// 2. Take data from file users.json and output person names with salary that are bigger than 1000. Try to use *Array* object methods like *forEach*.

function getSalary(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erron occured ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        user.salary > 1000 ? console.log(user.name) : "";
      });
    }).catch(err => console.log('Error message:', err));
}

getSalary("../users.json");

// 3. Print current bitcoin price using https://api.gdax.com/products/BTC-USD/book

function getBitcoinValue(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erron occured ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(`Current Bitcoin price: ${data.asks[0][0]} Usd`);
    }).catch(err => console.log('Error message:', err));
}

getBitcoinValue("https://api.gdax.com/products/BTC-USD/book");

//    More advanced. Optional:
//4. Take data from file *users.json* and create Users array. Sort this array by users name. Try to use *Array sort* method.

function sortUsers(url) {
	return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erron occured ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
			const users = data.map(user => {
				return user.name
			})
			const sorted = users.sort();
			console.log(sorted);
      
    }).catch(err => console.log('Error message:', err));
}

sortUsers("../users.json");

//5. Take data from file *users.json* and create Users array. Filter this array so output will contains only that users that have salary bigger than 1000. Try to use *Array filter* method.
//

function filterSalary(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erron occured ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      const users = data.filter(user => {
        return user.salary > 1000;
      });
			users.map(user => console.log(user.name));
    }).catch(err => console.log('Error message:', err));
}

filterSalary("../users.json");

//6. Take data from file *users.json* and create Users array. Create a new array that will have users with name prefixed with `Hello from` string. Try to use *Array map* method.

function prefixArr(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Erron occured ${res.status}`);
      }
      return res.json();
    })
    .then(users => {
			const prefixed = users.map(user => {
				return {...user, name: `Hello from ${user.name}`};
			});
			console.log(prefixed);
    }).catch(err => console.log('Error message:', err));
}

prefixArr("../users.json");
