/**
 * JavaScript applications consist of statements with an appropriate syntax.
 * A single statement may span multiple lines. Multiple statements may occur
 * on a single line if each statement is separated by a semicolon. This isn't
 * a keyword, but a group of keywords.
 * 
 * The following are few control flow statements examples.
 */

// If ... else statement example.
const x = 5;
const y = 6;

if (x > y) {
  console.log("x is greater than y.");
} else {
  console.log("x is not greater than y.");
}
// Result: x is not greater than y.

// Switch statement example.
const vegetableType = 'Cucumber';

switch (vegetableType) {
  case 'Cucumber':
    console.log('Cucumbers are $0.59 a pound.');
    break;
  case 'Spinach':
    console.log('Spinachs are $0.32 a pound.');
    break;
  case 'Tomato':
    console.log('Tomatoes are $0.48 a pound.');
    break;
  case 'Cabbage':
    console.log('Cabbages are $3.00 a pound.');
    break;
  case 'Salad':
    console.log('Salad are $0.56 a pound.');
    break;
  case 'Paprika':
    console.log('Paprikas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + vegetableType + '.');
}
// Result: Cucumbers are $0.59 a pound.