/**
 * Objects are used to describe a real life object by
 * combining its properties and methods.
 * 
 * Properties - define characteristics of object.
 * Methods - define operations with current object.
 */

const myHonda = {
  color: 'red',
  wheels: 4,
  engine: {
    cylinders: 4, 
    size: 2.2
  },
  getColor: function() { return this.color; }
};

console.log(myHonda.getColor());
// Result: red