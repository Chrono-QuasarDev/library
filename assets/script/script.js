const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  return newBook
}

addBookToLibrary('The Greatest Estate Developer', 'Bk_Moon/ Lee hyunmin', 213);
console.log(myLibrary);