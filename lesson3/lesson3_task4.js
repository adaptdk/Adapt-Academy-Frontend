/* Vytenis Dzvonkas  dzvonkasvytenis@gmail.com
=============Adapt Academy Frontend=============
Lesson 3; Task 
Take data from file *users.json* and create Users array. 
Filter this array so output will contains only that users that
have salary bigger than 1000. Try to use *Array filter* method.

*/

var over1k = [];

const filterOver1k = () => {
  fetch("users.json")
    .then(resp => resp.json())
    .then(data => {
      data.filter(user => {
        if (user.salary > 1000) {
          over1k.push(user);
        }
      });
    });
};
filterOver1k();
console.log(over1k);
