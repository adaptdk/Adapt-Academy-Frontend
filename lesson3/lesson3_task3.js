/* Vytenis Dzvonkas  dzvonkasvytenis@gmail.com
=============Adapt Academy Frontend=============
Lesson 3; Task 3
3. Take data from file *users.json* and create Users array.
Sort this array by users name. Try to use *Array sort* method.

*/

const getUserData = () => {
  fetch("users.json")
    .then(resp => resp.json())
    .then(data => {
      const sortedUsers = data.sort(function(a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      console.log(sortedUsers);
    });
};
getUserData();
