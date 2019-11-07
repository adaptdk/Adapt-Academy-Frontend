const circle = {
  radius: 1, // property.
  location: {
    x: 1,
    y: 1,
  },
  draw: function() { // method.
    console.log(this);
  },
}

circle.draw(); // Logs {radius: 1, location: {…}, draw: ƒ}