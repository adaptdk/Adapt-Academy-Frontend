/**
 * The filter() method creates a new array with all
 * elements that pass the test implemented by the provided function.
 */


const arr1 = ['Adapt', 'Academy', 'Frontend', 'Lecture', 'Javascript', 'Html', 'Css'];

const filter1 = arr1.filter((word, index, array) => {
  return word.length > 5;
});

console.log(filter1);
// (4) ["Academy", "Frontend", "Lecture", "Javascript"]