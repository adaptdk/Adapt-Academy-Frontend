(function getData() {
  fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
  .then(function(response){ return response.json()})
  .then(function(data) {
    const parsedData = JSON.parse(JSON.stringify(data));
    sortNames(parsedData);
  })

  .catch(error => console.error(error))
  })();

  function sortNames (data) {
    array = data.sort(function(a ,b){
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    })
    console.log(array);
}

