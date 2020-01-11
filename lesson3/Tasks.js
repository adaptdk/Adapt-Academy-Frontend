function getZodiacSign(day, month) {
    if (day > 0 && day < 32 && month < 13 && month > 0) {
        console.log("Your zodiac is: ");
        switch (month) {
            case 1:
                day < 20 ? console.log("Capricorn") : console.log("Aquarius");
                break;
            case 2:
                day < 18 ? console.log("Aquarius") : console.log("Pisces");
                break;
            case 3:
                day < 20 ? console.log("Pisces") : console.log("Aries");
                break;
            case 4:
                day < 20 ? console.log("Aries") : console.log("Taurus");
                break;
            case 5:
                day < 21 ? console.log("Taurus") : console.log("Gemini");
                break;
            case 6:
                day < 21 ? console.log("Gemini") : console.log("Cancer");
                break;
            case 7:
                day < 23 ? console.log("Cancer") : console.log("Leo");
                break;
            case 8:
                day < 23 ? console.log("Leo") : console.log("Virgo");
                break;
            case 9:
                day < 23 ? console.log("Virgo") : console.log("Libra");
                break;
            case 10:
                day < 23 ? console.log("Libra") : console.log("Scorpio");
                break;
            case 11:
                day < 22 ? console.log("Scorpio") : console.log("Sagittarius");
                break;
            case 12:
                day < 22 ? console.log("Sagittarius") : console.log("Capricorn");
                break;
            default:
                console.log("Wrong Data");
        }
    } else { console.log("Bad parameters"); }

};

function loadLocalJson(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok:(');
            }
            return response.json();
        })
        .catch(err => console.log('Error: ', err));
}

function getFilteredAndSortedArray(users, price) {
    return users.filter(user => {
            return user.salary && user.salary > price;
        })
        .sort(user => user.name);
}

function printBitcoinPrice(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network reponse was not ok:(');
            }
            return response.json();
        })
        .then(results => console.log('Bitcoin price: ', results.bids[0][0], 'USD'));
}

function PrefixedUsersArray(users) {
    return users.map(user => {
        return { id: user.id, name: 'Hello from ' + user.name }
    });
}

getZodiacSign(23, 7);

loadLocalJson('users.json').then(users => {
    console.log(users, 'All users from Json');
    console.log(getFilteredAndSortedArray(users, 1000), 'Sorted and Filtered(>1000)');
    console.log(PrefixedUsersArray(users), 'Prefixed Users');
});

printBitcoinPrice('https://api.gdax.com/products/BTC-USD/book');