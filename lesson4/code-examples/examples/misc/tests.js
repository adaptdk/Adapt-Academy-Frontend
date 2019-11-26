// 16.
console.log('16.');
const text = "abcd";

console.log(text[0]);

// 17.
console.log('17.');
const arr = [1, 2, 3, 4, 5, 6];
const sumArr = arr.reduce((acc, value) => (acc += value));
console.log(sumArr);

// 18.
console.log('18.');
console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);

// 19.
console.log('19.');
const hello = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];

function joinChars(arr) {
  return arr.join('');
}

console.log(joinChars(hello));

// 20.
console.log('20.');
const person1 = { firstName: 'John', lastName: 'Bourne' };
const person2 = { firstName: 'James', lastName: 'Bond' };
console.log({ ...person1, ...person2 });

// 21.
console.log('21.');
const a = 5;
console.log(!a);

// 22.
console.log('22.');
const b = 1;
if (b === true) {
  console.log(true);
} else {
  console.log(false);
}

// 24.
console.log('24.');
const c = { a: 1, b: 2, c: 3 };
Object.values(c).forEach(element => {
  console.log(element);
});

// 25.
console.log('25.');
const arr2 = [1, 2, 3, 4, 5, 6];
const arr2Reduced = arr2.reduce(function(acc, curValue) {
  return acc *= curValue;
});
console.log(arr2Reduced);

// 26.
console.log('26.');
const d = [1, 2, 3, 4, 5, 6];
const result = d.filter((value) => (value % 2 === 0));
console.log(result);
