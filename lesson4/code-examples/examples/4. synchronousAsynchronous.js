/**
 * Javascript is synchronous, blocking and single threaded language by default,
 * but there are few ways to make it behave asynchronous non-blocking.
 * These are callbacks, promises and async/await functions.
 */

// Blocking function.
console.log('1');

/**
 * Non blocking function using a callback. Function together with
 * a nested callback is sent to the queue and then processed through
 * an event loop, so it won't block further execution of code.
 */
setTimeout(() => console.log('2'), 0);

// Blocking function.
console.log('3');

// Result: 1 3 2.
