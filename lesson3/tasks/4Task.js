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

        usersArray.sort(function (user1, user2) {
            if (user1.name > user2.name) {
                return 1;
            }
            if (user1.name < user2.name) {
              return -1;
            }
            return 0;
        });

        usersArray.forEach(user => console.log(user.name));
      })
      .catch(err => console.log('Error message:', err));
  }

  let usersArray = [];
  loadUsers('../users.json', usersArray);
