var  arr = [1,2,3,4];
//map grazina nauja masyva nekeicia originalaus
//forEach kiek vienam array itemui padaro kazkoki veiksma 
//ir foreachas nemutuoja pradinio masyvo
arr.map(
    function (item){
        return item *2;
    }
);

arr.reduce(
    function (item,acc){
        return acc +item;
    }
);

var str = "hello";

str[0]//h - tipas yra array like, galima pasiekti stuff bet negalima mutuoti

arr.map(
    function (item){
        return arguments[1] + arguments[0]; //pasiskaityt apie arguments jis sukisa i masyva stuff
    }
);



arr.map(
    function (item){
        return {name: item.name, age: item.age};  //grazina nauja masyva tik su tam tikrais properciais kuriuos paduodam per funkvcija
    }
);


var person = {
    name: 'Test',
    surname: 'Test2'
};

object.keys(person).forEach((item) => console.log(item));// galima pasiekt stuff taip pasigooglint

object.values(person).forEach((item) => console.log(item));


// getting users.json
//  const request = new XMLHttpRequest();

// request.open('GET', 'https://github.com/adaptdk/Adapt-Academy-Frontend/blob/master/lesson3/users.json');
// request.onload = function(){
//     console.log(request.responseText);
// }
// request.send(); 