(function getData() {
  fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
  .then(function(response){ return response.json()})
  .then(function(data) {
    const parsedData = JSON.parse(JSON.stringify(data));
    salaryNames(parsedData);
  })

  .catch(error => console.error(error))
  })();

function salaryNames (data) {
  data.forEach(function(el) {
    if (el.salary > 1000 ){
      console.log(el.name + " " + el.salary);
    }
  })
}
