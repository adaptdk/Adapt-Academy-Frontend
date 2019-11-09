/**
 * Inside a function marked as an async you are allowed to place an await keyword
 * in front of an expression that returns a promise. Then the execution of async
 * function is paused until the promise is resolved.
 * 
 * The idea behind async / await is to be able to write asynchronous code that looks like synchronous code.
 * Async functions return a promise.
 */

// Fetching data from api using promise based fetch method.
function fetchCatImagesPromise(userId) {
  return fetch(`http://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const promises = user.cats.map(catId => 
        fetch(`http://catappapi.herokuapp.com/cats/${catId}`)
          .then(response => response.json())
          .then(catData => catData.imageUrl)
      )

      return Promise.all(promises);
    });
}

fetchCatImagesPromise(123)
  .then(result => console.log('promise 1', result));
/**
 * Result:
 * [
 *   "http://images.somecdn.com/cat-21.jpg",
 *   "http://images.somecdn.com/cat-33.jpg",
 *   "http://images.somecdn.com/cat-45.jpg",
 * ]
 */


// Fetching data from api using async / await methods.
async function fetchCatImagesAsync(userId) {
  const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`);
  const user = await response.json();
  const catImageUrls = [];

  for (const catId of user.cats) {
    const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`);
    const catData = await response.json();
    catImageUrls.push(catData.imageUrl);
  }

  return catImageUrls;
}

fetchCatImagesAsync(123)
  .then(result => console.log('Promise 2', result));
/**
 * Result:
 * ["http://images.somecdn.com/cat-21.jpg", "http://images.somecdn.com/cat-33.jpg", "http://images.somecdn.com/cat-45.jpg"]
 */


/** 
 * Fetching data from api using async / await methods with async function
 * passed inside a map. Async function returns a promise for each iteration,
 * so we have an array of promises in catImageUrls. We need to combine
 * these promises into one using Promise.all() and return it.
 */
async function fetchCatImagesAsync2(userId) {
  const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`);
  const user = await response.json();
  const catImageUrls = user.cats.map(async (catId) => {
    const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`);
    const catData = await response.json();

    return catData.imageUrl;
  });

  return await Promise.all(catImageUrls);
}

fetchCatImagesAsync2(123)
  .then(result => console.log('Promise 3', result));

/**
 * Result:
 * [
 *   "http://images.somecdn.com/cat-21.jpg",
 *   "http://images.somecdn.com/cat-33.jpg",
 *   "http://images.somecdn.com/cat-45.jpg",
 * ]
 */

