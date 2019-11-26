/**
 * A callback function is a function passed into another
 * function as an argument, which is then invoked inside
 * the outer function to complete some kind of routine or action.
 * 
 * Note, however, that callbacks are often used to continue
 * code execution after an asynchronous operation has
 * completed — these are called asynchronous callbacks.
 * 
 * Since JavaScript is single threaded all processing blocks until one of the following occurs:
 * 1) The current execution requests an external service such as an I/O or networking request, or a webworker request.
 * 2) A function call is put on a timer to be executed at a later time.
 */

// This is a callback function we'll be using for examples.
function greeting(name) {
  console.log('Hello ' + name);
}

// Example of blocking synchronous function, as it's callback is executed immediately.
function blockingFunction(name, callback) {
  for (let i = 1; i <= 2; i++) {
    console.log(i);
  }
  callback(name);
}

console.log('started');
blockingFunction('Irmantas', greeting);
console.log('finished');
// Result: started 1 2 Hello Irmantas finished

// Example of non-blocking asynchronous function, as it's callback is called on an async setTimeout function.
function nonBlockingFunction(name, callback) {
  setTimeout(function() {
    for (let i = 1; i <= 2; i++) {
      console.log(i);
    }
    callback(name);
  }, 0);
}

console.log('started');
nonBlockingFunction('Irmantas', greeting);
console.log('finished');
// Result: started finished 1 2 Hello Irmantas
