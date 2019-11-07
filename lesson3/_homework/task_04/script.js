
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 04 by Donatas Dereškevičius 


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
        let usersArray = users.sort((a, b) => {
            if (a.name > b.name){
                return 1;
            } else if (a.name < b.name){
                return -1;
            } else {
                return 0;
            }
        });

        usersArray.forEach( ({name}) => {
            document.querySelector(".results").innerHTML += name + '<br />';
        });
   
    })
    .catch (error => console.log(error));
}

loadJson();