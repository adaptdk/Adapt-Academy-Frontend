
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 06 by Donatas Dereškevičius 


const loadJson = () => {

    fetch (`../../users.json`)
    .then (response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(users => {
        let usersArray = users.map((user) => `<br /> Hello from ${user.name}`);
        document.querySelector(".results").innerHTML = usersArray;
        })
    .catch (error => console.log(error));
}

loadJson();