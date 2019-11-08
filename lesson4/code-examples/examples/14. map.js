/**
 * The map() method creates a new array with the results
 * of calling a provided function on every element in the calling array.
 */

const array1 = [1, 2, 3, 4, 5];

// pass a function to map
const map1 = array1.map((item, index, array) => {
  return item * 2;
});

console.log(map1);
// expected output: Array [2, 4, 6, 8, 10]
