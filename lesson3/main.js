
(function passData() {
    let b = "";
    fetch('https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/lesson3/users.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data); // Prints result from `response.json()` in getRequest
        let string = JSON.stringify(data);

        // let datas = JSON.parse(string);
        /*
        if (datas[0].salary) {
            console.log(datas[0].salary)
        }
        // console.log(datas[0]);
        */
    //    return datas;
    printNameSalary(string);
    // createUsersArr(datas);
    
    console.log(typeof datas)
    console.log(datas[0].name);
    /*
    datas.forEach(element => {
        console.log(datas[element]);
    });
    */ 
    
    })
    .catch(error => console.error(error))
})();

function printNameSalary(obj) {
    for (var i = 0; i < obj.length; i ++) {
        if (obj[i].salary > 1000) {
            console.log(`${obj[i].name}, ${obj[i].salary}`);
        }
   }
}
function createUsersArr(obj) {
    let usersArr = [];
    usersArr = obj.sort((function(a, b) {
        // for (var i = 0; i < obj.length; i++) {
            a.value[name] - b.value[name];
        // }
    }));
    console.log(usersArr);
    return usersArr;
}

