/* Vytenis Dzvonkas  dzvonkasvytenis@gmail.com
=============Adapt Academy Frontend=============
Lesson 3; Task 2

2. Take data from file users.json and output person names with salary
 that are bigger than 1000. Try to use *Array* object methods like *forEach*.
*/

const getNamesOfPplWithSalariesOver1k = () => {
  fetch("users.json")
    .then(resp => resp.json())
    .then(data => {
      data.forEach(element => {
        if (element.salary > 1000) {
          console.log(element.name);
        }
      });
    });
};
getNamesOfPplWithSalariesOver1k();
