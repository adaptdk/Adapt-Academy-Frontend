/**
 * Scope is a current execution context. The context in which values
 * and expressions can be accessed. If a variable is not in the current 
 * scope, then it’s value is undefined, it is unavailable for us to use. 
 * Scopes could be layered in hierarchy so that child scopes have 
 * access to parent scopes but not vice versa.
 */

// Global scope example.
var car = "Volvo";
console.log(car); // Volvo.
console.log(window.car); // Volvo.

// Local (function) scope example.
function myCar() {
  var carName = "Audi";
  console.log(carName); // Audi.
}
console.log(typeof carName); // Undefined.

// Block scope example.
function myCar() {
  var carName = "BMW";

  for (let i = 1; i <= 4; i++) {
    console.log(carName, i) // BMW 1, 2, 3, 4.
  }

  console.log(carName, typeof i) // BMW Undefined.
}

