/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function’s scope
 * from an inner function. In JavaScript, closures are created every time
 * a function is created, at function creation time.
 */


/**
 * The following code illustrates how to use closures to define public
 * functions that can access private functions and variables. Using 
 * closures in this way is known as the module pattern.
 */
const counter = (function() {
  let privateCounter = 0;

  const changeBy = (val) => {
    privateCounter += val;
  };

  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => privateCounter,
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

 