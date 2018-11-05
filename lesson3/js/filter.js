(function getData() {
  fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
  .then(function(response){ return response.json()})
  .then(function(data) {
    const parsedData = JSON.parse(JSON.stringify(data));
    salaryFilter(parsedData);
  })

  .catch(error => console.error(error))
  })();

function salaryFilter(data){
  const user = data.filter(function(item){
    if (item.salary > 1000)
    return item;
  })
  console.log(user);
}