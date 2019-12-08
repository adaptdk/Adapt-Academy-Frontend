
//                    Adapt Academy 2019 lesson 04 - JS | task 01 by Donatas Dereškevičius                     

const countryList = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "Åland Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}
    ]

    const getCountryByCode = (data) => {

        input = document.querySelector(".form-input").value;
        data = input.toUpperCase();


        for(let {code: x, name: y} of countryList) {
            if(x === data){
                return document.querySelector(".result").innerHTML = y;
            }
        }   return document.querySelector(".result").innerHTML = 'country not found !';
    };
