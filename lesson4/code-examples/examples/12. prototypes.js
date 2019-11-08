// Book constructor.
function Book(author, title, year) {
  this.author = author;
  this.title = title;
  this.year = year;
}

Book.prototype.getDescription = function() {
  return `Book ${this.title} was written by ${this.author} in ${this.year}`;
}

const book1 = new Book('John Doe', 'Book 1', '2016');

console.log(book1);
// Book {author: "John Doe", title: "Book 1", year: "2016"}

// Magazine constructor
function Magazine(author, title, year, month) {
  // Calling a book object providing current this value.
  Book.call(this, author, title, year);

  this.month = month;
}

// Inherit book prototype.
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine constructor.
Magazine.prototype.constuctor = Magazine;

const mag1 = new Magazine('John Lil', 'Mag 1', '2019', 'Dec');

console.log(mag1.getDescription());
// Book Mag 1 was written by John Lil in 2019
