/**
 * The Fetch API provides an interface for fetching
 * resources (including across the network). It will
 * seem familiar to anyone who has used XMLHttpRequest,
 * but the new API provides a more powerful and flexible feature set.
 */

const imageContainer = document.createElement('div');

imageContainer.className = 'images';
imageContainer.style = 'display: flex; flex-wrap: wrap;';
document.body.appendChild(imageContainer);

// Appends image element to the document.
function addImageToDom(image) {
  const imgElement = new Image(image.width, image.height);

  imgElement.src = image.url;
  imgElement.style = 'width: 25%; height: auto; object-fit: cover';
  imageContainer.appendChild(imgElement);
}

// Set up url get parameters.
function setGetParams(path, params) {
  const url = new URL(path);
  const searchParams = new URLSearchParams(params);
  url.search = searchParams.toString();

  return url;
}

// AJAX request example using promise based fetch method.
function loadJson(path, params) {
  return fetch(setGetParams(path, params))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return response.json();
    })
    .then(cats => {
      cats.forEach((img) => addImageToDom(img))
    })
    .catch(err => console.log('Error message:', err));
}

const endpoint = 'https://api.thecatapi.com/v1/images/search';
const params = {
  limit: 12,
  mime_types: 'gif',
};

// Requesting thecatapi.com. It provides a random image object on each API endpoint load.
loadJson(endpoint, params);

