/*5. Take data from file *users.json* and create Users array. 
Filter this array so output will contains only that users that have salary bigger than 1000.
Try to use *Array filter* method.*/
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
