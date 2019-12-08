
//                    Adapt Academy 2019 lesson 04 - JS | task 03 by Donatas Dereškevičius   

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

  let forceUsers = [];

  personnel.forEach(({isForceUser : i, name: n, pilotingScore: x, shootingScore: y}) => {
      if(i === true){
          let userScore = x + y;
          forceUsers.push({n, userScore});
          return document.querySelector(".result").innerHTML += n + ' ' + userScore + '<br />';
      }
  });

  let totalScore = forceUsers.reduce((a, b) => a + b.userScore, 0);

  document.querySelector(".result_2").innerHTML += + ' ' + totalScore;