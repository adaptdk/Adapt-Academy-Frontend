/**
 * Arrays are list-like objects. You can perform
 * traversal operations against them to add, filter or modify it’s data.
 */

const numberList = [1, 2, 3, 4, 5];
const letterList = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];

console.log(numberList.length) // Result: 5.
console.log(letterList.length) // Result: 11.
console.log(numberList[1]) // Result 2.

numberList.push(6) // Adds element to array.
console.log(numberList) // Result: [1, 2, 3, 4, 5, 6].

numberList.pop() // Removes last item from array.
console.log(numberList) // Result: [1, 2, 3, 4, 5].

console.log(letterList.join('')); // Result: Hello world