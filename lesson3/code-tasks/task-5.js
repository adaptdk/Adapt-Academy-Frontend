const path = '../users.json';

const loadUsers = (path) => {
  return fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return response.json();
    })
    .then(users => {
      let originalUsers = users
      originalUsers.forEach(element => {
        if(element.salary && console.log(element.salary));
      });

      console.log('================================FILTERED===================================');
      
      let filteredUsers = users.filter(user => user.salary > 1000)
      filteredUsers.forEach(element => {
        if(element.salary && console.log(element.salary));
      });
    })
    .catch(err => console.log('Error message:', err));
}

loadUsers(path);