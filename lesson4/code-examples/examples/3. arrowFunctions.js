/**
 * Arrow functions are syntactically compact alternative to
 * regular functions, but without it’s own bindings to this 
 * keyword. Therefore these functions are not suited to use 
 * as an object’s methods and cannot be used as a constructor function.
 */

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// Arrow function supplied as a foreach callback.
materials.forEach((item, index) => {
  console.log(index, item);
});

// Regular function supplied as a foreach callback.
materials.forEach(function(item, index) {
  console.log(index, item);
});


/**
 * Arrow function does automatic return when it's body is
 * wrapped inside parenthesis () instead of curly brackets {}.
 */

// Arrow function with automatic return using ().
const sayHello = (name) => (
  'Hello ' + name
);

const sayHello2 = name => 'Hello ' + name;

// Outputs: Hello Irmantas
console.log(sayHello('Irmantas'));

// Arrow function with explicit return using {}.
const sayHello3 = (name) => {
  return 'Hello ' + name;
};

// Outputs: Hello Irmantas
console.log(sayHello2('Irmantas'));


/**
 * Arrow functions do not provide their own binding to this value.
 * It uses this value from the enclosing context that it was defined on.
 * In Regular functions this keyword represents the object that called the function.
 */

 const obj1 = {
   name: 'Irmantas',
   age: 29,
   getInfoRegular: function() {
     console.log(this);
   },
   getInfoArrow: () => {
    console.log(this);
  },
 };

 // Outputs: {name: "Irmantas", age: 29, getInfoRegular: ƒ, getInfoArrow: ƒ}
 obj1.getInfoRegular();

 // Outputs: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
 obj1.getInfoArrow();