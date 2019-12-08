
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 02 by Donatas Dereškevičius 


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
        let output = '<h2>users with salary over 1 k</h2>';
        output += '<ul>';
        users.forEach((user) => {
            if (user.salary > 1000){
            output += `
                <li>
                    ${user.name}
                </li>
            `;
        }});
        output += '</ul>'
        document.querySelector(".results").innerHTML = output;
    })
    .catch (error => console.log(error));
}

loadJson();