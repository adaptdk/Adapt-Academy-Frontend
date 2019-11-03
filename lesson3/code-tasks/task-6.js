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
      users.map(user => console.log(`Hello from ${user.name}`));
    })
    .catch(err => console.log(`Error message: ${err}`));
}

loadUsers(path);