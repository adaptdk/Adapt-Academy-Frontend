function loadUsers(path) {
    return fetch(path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        return response.json();
      })
      .then(users => {
        users.forEach(u => {
            if (u.salary > 1000) {
                console.log(u.name);
            }
        });
      })
      .catch(err => console.log('Error message:', err));
  }

  loadUsers('../users.json');