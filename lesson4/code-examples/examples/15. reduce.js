/**
 * The reduce() method executes a reducer function (that you provide)
 * on each element of the array, resulting in a single output value.
 */

const arr = [1, 2, 3, 4];

const arrMultiplied = arr.reduce((acc, value, index, array) => {
  acc[index] = value * 2;

  return acc;
}, []);

console.log(arrMultiplied);
// (4) [2, 4, 6, 8]