/* Vytenis Dzvonkas  dzvonkasvytenis@gmail.com
=============Adapt Academy Frontend=============
Lesson 3; 5. Take data from file *users.json* and create Users array.
Create a new array that will have users with name prefixed with `Hello from` string.
Try to use *Array map* method.
*/



const mapUsersAddHello = () => {
  fetch('users.json')
    .then(resp => resp.json())
    .then(data => {
      var users = data.map(user => `Hello ${user.name}`)
      console.log(users);
    })
}
mapUsersAddHello();




