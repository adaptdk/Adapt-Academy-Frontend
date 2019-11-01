function loadUsers(path, usersArray) {
    return fetch(path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        return response.json();
      })
      .then(users => {
        users.forEach(user => {
            usersArray.push(user);
        });

        usersArray = usersArray.filter(user => user.salary > 1000);
        console.log('Users with salary bigger than 1000:');
        usersArray.forEach(user => console.log(user.name));
      })
      .catch(err => console.log('Error message:', err));
  }

  let usersArray = [];
  loadUsers('../users.json', usersArray);
