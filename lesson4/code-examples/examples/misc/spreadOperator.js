const person1 = {
  name: 'Irmantas',
  occupation: 'Front end developer',
  level: 'Mid',
  language: 'Javascript',
};

const person2 = {
  name: 'Evaldas',
  occupation: 'Back end developer',
  level: 'Senior',
  language: 'PHP',
};

const mergedPersons = {
  ...person1,
  ...person2,
};

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const merge = ( ...objects ) => (
  [...objects]
);

console.log(merge(obj1, obj2));