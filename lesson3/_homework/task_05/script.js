
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 05 by Donatas Dereškevičius 


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
        let usersArray = users.filter(({name, salary}) => {
            if (salary > 1000){
                document.querySelector(".results").innerHTML += name + " " + salary + '<br />';
                return name;
            }
        }); 
        console.log(usersArray);
    })
    .catch (error => console.log(error));
}

loadJson();