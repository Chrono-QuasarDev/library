const myLibrary = [];
const displayBook = document.getElementById('library');

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  return newBook
}

addBookToLibrary('The Greatest Estate Developer', 'Bk_Moon/ Lee hyunmin', 213, true);
addBookToLibrary("Ominiscient Reader's Viewpoint", "Sing-Shong", 287, false);
addBookToLibrary("Eternally Regressing Knight", "Lee Hyunmin", 82 , true);
addBookToLibrary("The Knight King Who Returned with a God", "Salam Sallyeo", 136, false);
addBookToLibrary("Boundless Necromancer", "Seonwoon", 161, true);


function renderBook() {
  displayBook.innerHTML = '';

  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Book author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');

    readStatus.textContent = book.readStatus ? "Read" : "Not Read";
    readStatus.classList.add(book.readStatus ? 'read-status-green' : 'read-status-red');

    bookCard.append(title, author, pages, readStatus);
    displayBook.appendChild(bookCard);
  });
}

renderBook();
