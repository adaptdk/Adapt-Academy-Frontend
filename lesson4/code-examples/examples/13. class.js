// Book class.
class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }

  getDescription() {
    return `Book ${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book1 = new Book('John Doe', 'Book 1', '2016');

console.log(book1);
// Book {author: "John Doe", title: "Book 1", year: "2016"}

// Magazine class
class Magazine extends Book {
  constructor(author, title, year, month) {
    // call the super class constructor and pass in the parameters.
    super(author, title, year);
  
    this.month = month;
  }

  getReleaseDate() {
    return `${this.title} was released in ${this.year} ${this.month}`
  }

  // The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance
  static printMagazineName(magazine) {
    return `The magazine name is ${magazine}`;
  }
}

const mag1 = new Magazine('John Lil', 'Mag 1', '2019', 'Dec');
console.log(mag1.getDescription());
// Book Mag 1 was written by John Lil in 2019.

console.log(Magazine.printMagazineName('mag1'));
// The magazine name is mag1.