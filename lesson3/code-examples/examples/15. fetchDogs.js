/**
 * Fetch dogs by breed.
 */

const imageContainer = document.createElement('div');

imageContainer.className = 'images';
imageContainer.style = 'display: flex; flex-wrap: wrap;';
document.body.appendChild(imageContainer);

function addImageToDom(image) {
  const imgElement = new Image();

  imgElement.src = image;
  imgElement.style = 'width: 25%; height: auto; object-fit: cover';
  imageContainer.appendChild(imgElement);
}

function listDogBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(result => {
      const breeds = Object.keys(result.message);
      const selectContainer = document.createElement('select');
      selectContainer.innerHTML = '<option disabled selected>Select dog breed</option>';
      selectContainer.addEventListener('change', ({ target : { value } }) => listDogBreedImages(value));
      document.body.prepend(selectContainer);

      breeds.forEach((breed) => {
        const option = document.createElement('option');
        option.textContent = breed;
        option.value = breed;
        selectContainer.appendChild(option);
      });
    });
}


function listDogBreedImages(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return response.json();
    })
    .then(dogs => {
      imageContainer.innerHTML = '';
      dogs.message.forEach((img) => addImageToDom(img))
    })
    .catch(err => console.log('Error message:', err));
}

listDogBreeds();

