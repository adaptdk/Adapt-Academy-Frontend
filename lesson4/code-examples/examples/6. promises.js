/**
 * In order to avoid so called callback hell (deep nesting of functions) which could be an
 * issue in a more complex callback functions Promises could be useful. Promises allows us
 * to code in a more modular, readable way while still maintaining asynchronous code execution.
 * 
 * The Promise object represents the eventual completion (or failure) of an asynchronous
 * operation, and its resulting value.
 */


 // Example of adding 3 images to a browser in sequence using a callback based approach.
const addImg = (src) => {
  const imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appendChild(imgElement);
}

function loadImageCallbacked(url, callback) {
  let image = new Image();

  image.onload = function() {
    callback(null, image);
  }

  image.onerror = function() {
    let message = 'Could not load image at ' + url;
    callback(new Error(message));
  }

  image.src = url;
}

// As you can see there is a deep nesting of functions when trying to maintain the order of execution in async callbacks.
loadImageCallbacked('assets/images/cat1.jpeg', (error, img) => {
  if (error) throw(error);
  addImg(img.src);

  loadImageCallbacked('assets/images/cat2.jpeg', (error, img) => {
    if (error) throw(error);
    addImg(img.src);

    loadImageCallbacked('assets/images/cat3.jpeg', (error, img) => {
      if (error) throw(error);
      addImg(img.src);
    });
  });
});


function loadImagePromised(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function() {
      resolve(image);
    }
  
    image.onerror = function() {
      let message = 'Could not load image at ' + url;
      reject(new Error(message));
    }

    image.src = url;
  });
}

// Promises compose, so it's much more readable and error handling is more straightforward compared to callback based approach.
Promise.all([
  loadImagePromised('assets/images/cat1.jpeg'),
  loadImagePromised('assets/images/cat2.jpeg'),
  loadImagePromised('assets/images/cat3.jpeg'),
]).then((images) => {
  images.forEach(image => addImg(image.src));
}).catch(error => {
  throw(error);
});

