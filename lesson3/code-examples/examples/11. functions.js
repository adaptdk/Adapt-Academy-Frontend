/**
 * Functions are fundamental building blocks in Javascript.
 * They are a set of procedures/logic to perform a certain
 * task or calculate and return a value.
 */

// Returns the value of two numbers.
function getSum(a, b) {
  return a + b;
}

// Functions can be assigned to a variable.
const multipleItems = function(a, b) {
  return a * b;
};

console.log(getSum(2, 2)) // Result: 4.
console.log(multipleItems(2, 4)) // Result: 8.
