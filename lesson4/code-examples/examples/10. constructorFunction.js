// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(this);
  };
}

/**
 * New keyword creates and empty object and makes
 * this keyword point to that object.
 * And created function returns this automatically.
 */
const circleObj = new Circle(1);
circleObj.draw(); // Circle {radius: 1, draw: ƒ}
console.log(circleObj); // Circle {radius: 1, draw: ƒ}