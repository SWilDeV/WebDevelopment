class Book {
  constructor(p_name, p_pages) {
    this.name = p_name;
    this.pages = p_pages;
  }
  getName = () => {
    return this.name;
  };
  getNumberOfPages = () => {
    return this.pages;
  };
}
class Library {
  constructor() {
    this.BooksOut = [];
    this.BooksIn = [];
    this.allBooksAreIn = true;
  }
  addBook = (book) => {
    this.BooksIn.push(book);
  };

  borrowBook = (name) => {
      BooksIn.forEach(book => {
          if(book.name === name){
            this.BooksOut.push(Book(name));
            this.allBooksAreIn = false;
          }
          else{
              return -1;
          }
      });
    
  };
}
