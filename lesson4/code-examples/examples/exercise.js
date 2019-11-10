// Write function to which will get getCountryByCode('DZ');     Use array functions

function getCountryByCode(code) {
  const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' }
  ];
  const result = countries.filter(
    country => country.code === code.toUpperCase()
  );
  return result.length > 0 ? result[0].name : 'Country not found!';
}

function countryFinder() {
  const countryCode = document.getElementById('task-one__input').value;
  const result = getCountryByCode(countryCode);
  document.querySelector('.task-one-result').textContent = result;
}

// Rewrite function using es7 await / async

// var fetch = require('node-fetch');

async function getCountries() {
  const res = await fetch(
    'https://restcountries.eu/rest/v2/name/Indonesia?fullText=true'
  );
  const json = await res.json();
  let code = await json[0].alpha2Code;
  const res2 = await fetch('http://country.io/phone.json');
  const json2 = await res2.json();
  return json2[code];
}
const result2 = getCountries().then(data => {
  document.querySelector('.task-two-result').textContent = data;
});

// Our objective: get the total score of force users only. Let’s do it step by step!

var personnel = [
  {
    id: 5,
    name: 'Luke Skywalker',
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: 'Sabine Wren',
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: 'Zeb Orellios',
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: 'Ezra Bridger',
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: 'Caleb Dume',
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

function getTotalScore() {
  const scores = personnel.map(person => {
    return person.isForceUser ? person.shootingScore : '';
  });
  return scores.reduce((a, c) => parseInt(a) + c);
}
const result3 = getTotalScore();
document.querySelector('.task-three-result').textContent = result3;

// Write a prototype based counter which has methods `start()`, `stop()`, `resume()` and `reset()`.
// `start()` method will receive a time parameter with format `hh:mm:ss` which as example is `00:01:10`.
// It will count up to the given time and then it will stop automatically. If parameter is not supplied then it will count indefinitely.
// If poorly formmatted time string will be supplied to the method it will throw an error.
// `stop()` will stop (pause) the counter.
// `resume()` will start counting once again from the time value it has stopped on.
// `reset()` will reset time to 0.

// A counter constructor will receive a formatted time parameter `hh:mm:ss` which we will use as a start time to start counting from.

function Counter() {
  this.endTime = 0;
  this.currentTime = 0;
  this.totalTime = 0;
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  this.counting = false;

  this.timer = function() {
    this.currentTime = setTimeout(this.counter.bind(this), 1000);
  };

  this.counter = function() {
    this.totalTime++;
    this.seconds++;
    console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
    if (this.totalTime === this.endTime) {
      this.stop();
      return;
    }
    this.timer();
  };

  this.start = function(endtime) {
    this.endTime = endtime;
    if (!this.counting && this.currentTime === 0) {
      this.timer();
      this.counting = true;
    }
  };
  this.stop = function() {
    clearTimeout(this.currentTime);
    this.counting = false;
  };
  this.resume = function() {
    if (!this.counting && this.currentTime > 0) {
      this.timer();
      this.counting = true;
    }
  };
  this.reset = function() {
    this.stop();
    this.counting = false;
    this.currentTime = 0;
    this.totalTime = 0;
    this.endTime = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  };
  this.getTime = function() {
    return { seconds: this.seconds };
  };
}

const counter = new Counter();

function parseTime(arg) {
  if (!arg) {
    return 0;
  }
  const arr = arg.split(':');
  const hour = parseInt(arr[0]) * 3600;
  const minute = parseInt(arr[1]) * 60;
  const second = parseInt(arr[2]);
  if (hour + minute + second) {
    return hour + minute + second;
  } else return 'Invalid time!';
}

// const taskFour = (document.querySelector('.task-four__result').textContent = currentTime;
let currentTime = counter.getTime();
while (counter.counting) {
  console.log(currentTime);
}
const taskFourErr = document.querySelector('.task-four__err');

function startCounter() {
  const time = document.getElementById('task-four__input').value;
  const parsed = parseTime(time);
  if (parsed === 'Invalid time!') {
    taskFourErr.textContent = `${parsed} counter won't start`;
    return;
  }
  counter.start(parsed);
}

function stopCounter() {
  counter.stop();
}

function resumeCounter() {
  counter.resume();
}
function resetCounter() {
  counter.reset();
}
