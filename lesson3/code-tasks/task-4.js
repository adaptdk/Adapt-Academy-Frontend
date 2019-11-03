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
        console.log(element.name);
      });
      console.log('================================SORTED===================================');
      let sortedUsers = users.sort((a,b) => a.name.localeCompare(b.name))

      sortedUsers.forEach(element => {
        console.log(element.name);
      });
    })
    .catch(err => console.log('Error message:', err));
}

loadUsers(path);