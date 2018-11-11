// Write function getZodiacSign(day, month) which will return zodiac sign depending on input. 
function getZodiacSign(day, month) {
    let zodiac;

    switch(month, day) {
        case (month == 1 && day >= 20 && day <= 31): 
        case (month == 2 && day >= 1 && day < 18):
            zodiac = 'Aquarius';
            break;
        case (month == 2 && day >= 18 && day <= 29):
        case (month == 3 && day >= 1 && day < 20):
            zodiac = 'Pisces';
            break;
        case (month == 3 && day >= 20 && day <= 31):
        case (month == 4 && day >= 1 && day < 20):
            zodiac = 'Aries';
            break;
        case (month == 4 && day >= 20 && day <= 30):
        case (month == 5 && day >= 1 && day < 21):
            zodiac = 'Taurus';
            break;
        case (month == 5 && day >= 21 && day <= 31): 
        case (month == 6 && day >= 1 && day < 21):
            zodiac = 'Gemini';
            break;
        case (month == 6 && day >= 21 && day <= 30):
        case (month == 7 && day >= 1 && day < 23):
            zodiac = 'Cancer';
            break;
        case (month == 7 && day >= 23 && day <= 31): 
        case (month == 8 && day >= 1 && day < 23):
            zodiac = 'Leo';
            break;
        case (month == 8 && day >= 23 && day <= 31): 
        case (month == 9 && day >= 1 && day < 23):
            zodiac = 'Virgo';
            break;
        case (month == 9 && day >= 23 && day <= 30): 
        case (month == 10 && day >= 1 && day < 23):
            zodiac = 'Libra';
            break;
        case (month == 10 && day >= 23 && day <= 31): 
        case (month == 11 && day >= 1 && day < 22):
            zodiac = 'Scorpio';
            break;
        case (month == 11 && day >= 22 && day <= 30):
        case (month == 12 && day >= 1 && day < 22):
            zodiac = 'Sagittarius';
            break;
        case (month == 12 && day >= 22 && day <= 31): 
        case (month == 1 && day >= 1 && day < 20):
            zodiac = 'Capricorn';
            break;
        default:
            zodiac = 'Wrong date, no zodiac found'
    }
    return zodiac;
  }

// Take data from file users.json and output person names with salary that are bigger than 1000. Try to use *Array* object methods like *forEach*.
const usersData = fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json').then(response => response.json());

usersData.then(users => {
  users.forEach(user => {
    if (user.salary > 1000) {
      console.log(user.name + ":" + user.salary);
    }
  });
});

// Take data from file *users.json* and create Users array. Sort this array by users name. Try to use *Array sort* method.
usersData.then(users => {
  let sortUsers = JSON.parse(JSON.stringify(users));
  sortUsers.sort((a, b) => {
       if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }
  
        return 0;
  });
  console.log(sortUsers);
});

// Take data from file *users.json* and create Users array. Filter this array so output will contains only that users that have salary bigger than 1000. Try to use *Array filter* method.
usersData.then(users => {
  let usersWithBigSalary = users.filter(user => user.salary > 1000);
  console.log(usersWithBigSalary);
});

// Take data from file *users.json* and create Users array. Create a new array that will have users with name prefixed with `Hello from` string. Try to use *Array map* method.
usersData.then(users => {
  let helloUsers = users.map(user => {
    user.name = "Hello from" + user.name;
    return user;
  });
  console.log(helloUsers);
});