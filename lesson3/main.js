
(function passData() {
    let b = "";
    fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data); // Prints result from `response.json()` in getRequest
        let string = JSON.stringify(data);

        let datas = JSON.parse(string);
        
        outputSalaryName(datas);
        createUsersArr(datas);
        filterUsers(datas);
        mapUsers(datas);
        
        
    })
    .catch(error => console.error(error))
})();

function outputSalaryName(obj) {
    obj.forEach(element => {
        if (element.salary > 1000) {
            console.log( `${element.name}: ${element.salary}`)
        }
        });
}

function createUsersArr(obj) {
    let usersArr;
    usersArr = obj.sort((a, b) => {
        // for (var i = 0; i < obj.length; i++) {
            if (a.name < b.name) {return -1;}
            if (a.name > b.name) {return 1;}
            return 0;
        // }
    });
    console.log(usersArr);
    return usersArr;
}

function filterUsers(obj){
    let users = obj.filter(salary => {
        if (salary.salary > 1000) {
            return salary;
        }
    });
    console.log('888')
    console.log(users);
}

function mapUsers(obj) {
    let users = obj.map(a => {
        a.name = `Hello from ${a.name}`;
        return a;
    });
    console.log(users);
}
