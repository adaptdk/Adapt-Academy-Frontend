/**
 * Use XMLHttpRequest (XHR) objects to interact with servers.
 * You can retrieve data from a URL without having to do a full
 * page refresh. This enables a Web page to update just part of a
 * page without disrupting what the user is doing. XMLHttpRequest is
 * used heavily in AJAX programming.
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

// AJAX request example using XMLHttpRequest.
function loadJson(path, params) {
  const xhttp = new XMLHttpRequest();
  const url = setGetParams(path, params);

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.responseText);
      console.log(result);
      result.forEach((image) => addImageToDom(image));
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

const endpoint = 'https://api.thecatapi.com/v1/images/search';
const params = {
  limit: 2,
  mime_types: 'gif',
};

// Requesting thecatapi.com. It provides a random image object on each API endpoint load.
loadJson(endpoint, params);

