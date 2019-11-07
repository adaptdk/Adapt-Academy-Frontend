// Abstraction means to hide complexity and expose only essential control methods or properties.
function Circle(radius) {
  let color = 'red';
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimalLocation = function() {
    console.log(defaultLocation);
  };

  this.radius = radius;

  this.draw = function() {
    computeOptimalLocation();
    console.log('draw');
  };
}

const circleObj = new Circle(1);