const myLibrary = [
  //   new Book("The Hobbit", "J.R.R. Tolkien", 366, true),
  //   new Book("The Last Wish", "Andrzej Sapkowski", 400, true),
  //   new Book("The Call of Cthulhu", "H.P. Lovecraft", 43, false),
];

function createUsersBook() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let bookStatus = document.querySelector("#status").checked;

  const book = new Book(title, author, pages, bookStatus);
  return book;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooksInfo() {
  let booksDisplay = document.querySelector(".books-display");
  booksDisplay.innerHTML = "";
  booksDisplay.innerHTML += "<table>";
  myLibrary.forEach((book) => {
    let dataId = myLibrary.length - 1;
    booksDisplay.innerHTML += `<div class="book-field" data-id="${dataId}"><td><p> ${book.info()} </p></td><button type="button" class="btn-remove-book">REMOVE</button></div>`;
    booksDisplay.innerHTML += "<hr>";
  });
  booksDisplay.innerHTML += "</table>";

  //Add the events to remove book buttons
  addRemoveEvents();
}

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.info = function () {
    let info =
      this.title + " by " + this.author + ", " + this.pages + " pages | ";

    this.readStatus ? (info += "✓") : (info += "𐄂");
    return info;
  };
}

// Show form on click
const btnShowForm = document.querySelector(".btn_show_form");
btnShowForm.addEventListener("click", () => {
  const addNewBookForm = document.querySelector(".book-form");
  addNewBookForm.style.visibility = "visible";
});

// Add a book from the form to the library
const btnAddBook = document.querySelector(".btn-add-book");
btnAddBook.addEventListener("click", (event) => {
  event.preventDefault();

  addBookToLibrary(createUsersBook());
  displayBooksInfo();
});

function addRemoveEvents() {
  const btnRemove = document.querySelectorAll(".btn-remove-book");
  btnRemove.forEach((button) => {
    button.addEventListener("click", (event) => {
      myLibrary.splice(event.target.dataset.id, 1);
      displayBooksInfo();
    });
  });
}
