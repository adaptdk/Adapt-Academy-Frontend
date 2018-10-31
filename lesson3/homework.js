const usersData = fetch('./users.json').then().then(response => response.json());

// 2
usersData.then(users => {
  users.forEach(user => {
    if (user.salary > 1000) {
      console.log(user.name);
    }
  });
});


// 3
usersData.then(users => {
  const sortedUsers = JSON.parse(JSON.stringify(users));
  sortedUsers.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log(sortedUsers);
});


// 4
usersData.then(users => {
  const usersFiltered = users.filter(user => user.salary > 1000);
  console.log(usersFiltered);
});


// 5
usersData.then(users => {
  const newUsers = users.map(user => {
    user.name = `Hello from ${user.name}`;
    return user;
  });

  console.log(newUsers);
});
