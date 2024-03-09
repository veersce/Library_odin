class Library {
  constructor() {
    this._books = [];
  }

  get books() {
    return this._books;
  }

  addBookToLibrary(book) {
    this._books.push(book);
  }
}

class Book {
  constructor() {
    this._title = document.querySelector("#title").value;
    this._author = document.querySelector("#author").value;
    this._pages = document.querySelector("#pages").value;
    this._status = document.querySelector("#status").checked;
  }

  // Getter and setters
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    this._author = author;
  }

  get pages() {
    return this._pages;
  }

  set pages(pages) {
    this._pages = pages;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  info() {
    // Title by Author, 123 pages | ✓
    let info =
      this.title + " by " + this.author + ", " + this.pages + " pages | ";

    this.status ? (info += "✓") : (info += "𐄂");
    return info;
  }
}

class displayConttroller {
  constructor() {
    this.showLibrary();
    this.addAddBookListener();
  }

  displayBooksInfo() {
    let booksDisplay = document.querySelector(".books-display");
    booksDisplay.innerHTML = "";
    booksDisplay.innerHTML += "<table>";
    library.books.forEach((book) => {
      let dataId = library.books.length - 1;
      booksDisplay.innerHTML += `<div class="book-field" data-id="${dataId}"><td><p> ${book.info()} </p></td><button type="button" class="btn-remove-book">REMOVE</button></div>`;
      booksDisplay.innerHTML += "<hr>";
    });
    booksDisplay.innerHTML += "</table>";

    this.showLibrary();
  }

  addShowFormListener() {
    const btnShowForm = document.querySelector(".btn_show_form");
    btnShowForm.addEventListener("click", () => {
      const addNewBookForm = document.querySelector(".book-form");
      addNewBookForm.style.visibility = "visible";
    });
  }

  addAddBookListener() {
    const btnAddBook = document.querySelector(".btn-add-book");
    btnAddBook.addEventListener("click", (event) => {
      event.preventDefault();
      let book = new Book();
      library.addBookToLibrary(book);
      this.displayBooksInfo();
    });
  }

  addRemoveBookListener() {
    const btnRemove = document.querySelectorAll(".btn-remove-book");
    btnRemove.forEach((button) => {
      button.addEventListener("click", (event) => {
        library.books.splice(event.target.dataset.id, 1);
        this.displayBooksInfo();
      });
    });
  }

  showLibrary() {
    this.addShowFormListener();
    this.addRemoveBookListener();
  }
}

// Main
const library = new Library();
const displayController = new displayConttroller();
