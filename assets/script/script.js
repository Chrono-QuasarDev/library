const myLibrary = [];
const displayBook = document.getElementById('library');
const newBook = document.getElementById("newBook");
const addBookDialog = document.getElementById("addBookDialog");
const form = document.getElementById("bookForm");
const closeBtn = document.getElementById("closeBtn");


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleReadStatus = function () {
  this.readStatus = !this.readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  renderBook();
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

    const readStatus = document.createElement('button');
    readStatus.textContent = book.readStatus ? "Read" : "Not Read";
    readStatus.dataset.id = book.id;
    readStatus.addEventListener("click", (event) => {
      const bookId = event.target.dataset.id;
      const book = myLibrary.find(item => item.id === bookId);
      if (book) {
        book.toggleReadStatus();
        event.target.textContent = book.readStatus ? "Read" : "Not read";
      }
    });
    // readStatus.classList.add(book.readStatus ? 'read-status-green' : 'read-status-red');

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = book.id;
    const bookId = deleteBtn.dataset.id;

    deleteBtn.addEventListener("click", () => {
      console.log(book.id);
      console.log(bookId);
      console.log(book)

      const bookToRemove = bookId;
      const indexToRemove = myLibrary.findIndex(item => item.id === bookToRemove);

      if (indexToRemove !== -1) {
        myLibrary.splice(indexToRemove, 1);
      }
      renderBook();
    });

    bookCard.append(title, author, pages, readStatus, deleteBtn);
    displayBook.appendChild(bookCard);
  });
}

newBook.addEventListener("click", () => {
  addBookDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  addBookDialog.close();
});

form.addEventListener("submit", (event) => {
  const getBookName = document.getElementById("bookName");
  const title = getBookName.value;

  const getBookAuthor = document.getElementById("bookAuthor");
  const author = getBookAuthor.value;

  const getBookPages = document.getElementById("bookPages");
  const pages = getBookPages.value;

  const getReadStatus = document.getElementById("bookRead");
  const readStatus = getReadStatus.value;
  readStatus.checked = true;

  addBookToLibrary(title, author, pages, readStatus);

  console.log('Form submitted');
  console.log(`Read status: ${readStatus}`);
  form.reset();
});