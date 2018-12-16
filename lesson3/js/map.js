(function getData() {
  fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
  .then(function(response){ return response.json()})
  .then(function(data) {
    const parsedData = JSON.parse(JSON.stringify(data));
    mapName(parsedData);
  })

  .catch(error => console.error(error))
  })();

function mapName (data) {
  let users;
  const map = data.map(function(x) {
    x.name = "Hello from " + x.name; 
    return x;
  })
  users = map;
  console.log(users);
}

