// Getters setters.
function Circle(radius) {
  let color = 'red';
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;

  let computeOptimalLocation = () => {
    console.log('computed');
  };

  this.draw = function() {
    console.log('draw');
    computeOptimalLocation();
  };

  // We're not happy to call it as a method from outside.
  this.getColor = function() {
    return color;
  }

  // Way to define getters and setters, so we'll access defaultLocation as a read only property.
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      defaultLocation = value;
    },
  });
}

// Static property which lays inside object constructor and could be accessed through constructor directly, not from object instances.
Circle.staticHello = 'Hello';

const circleObj = new Circle(1);

circleObj.defaultLocation = { x: 1, y: 1 };
console.log(circleObj);