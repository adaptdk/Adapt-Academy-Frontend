/**
 * This in Javascript references to an object executing current function.
 * In global context (when not inside any function), this will always refers to a global object - window.
 * In function context (when inside a function) this will depend on how function was called.
 */

// This inside global execution context.
console.log(this);
// Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

// This inside function context.
const dog = {
  name: 'Lokis',
  color: 'brown',
  barks: ['au', 'auu', 'auuu', 'woof'],
  bark() {
    console.log(this.name); // Lokis
    this.barks.forEach(function(bark) {
      console.log(this.name, bark); // Undefined au ...
    });
  },
  barkArrow() {
    this.barks.forEach((bark) => {
      console.log(this.name, bark); // Lokis au ...
    });
  },
};

dog.bark();
dog.barkArrow();
