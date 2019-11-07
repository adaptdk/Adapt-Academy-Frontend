// Factory function.
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log(this);
    },
  };
}

const circle = createCircle(1);
circle.draw(); // {radius: 1, draw: ƒ}

