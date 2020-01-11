/*
6. Take data from file *users.json* and create Users array.
 Create a new array that will have users with name prefixed with `Hello from` string.
 Try to use *Array map* method.
 */
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
        const prefix = 'Hello from ';
        let prefixedUsersArray = usersArray.map(curValue => 
            {
              let newCurrent = {...curValue};
              newCurrent.name = prefix + newCurrent.name;
              return newCurrent;  
            }
        );
        prefixedUsersArray.forEach(user => console.log(user.name));
      })
      .catch(err => console.log('Error message:', err));
  }

  let usersArray = [];
  loadUsers('../users.json', usersArray);
