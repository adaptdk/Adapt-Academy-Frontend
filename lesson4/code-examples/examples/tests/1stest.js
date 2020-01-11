const countries = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "Åland Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"},
    {"name": "BimBam", "code": "DZ"}
    ];
function getCountryByCode(code) {
    countries.forEach(e => {
        if(e.code === code) {
            console.log(e.name);   
        }    
    });
}
getCountryByCode('AF');
getCountryByCode('AX');
getCountryByCode('AL');
getCountryByCode('DZ');