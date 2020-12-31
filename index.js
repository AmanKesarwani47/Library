// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display
function Display() {}

// Add method to display prototype
Display.prototype.add = function (book) {
  let TbBody = document.getElementById("tableBody");
  let UIstring = `
            <tr>
              <td>${book.name}</td>
              <td>${book.author}</td>
              <td>${book.type}</td>
              
            </tr>
    `;

  TbBody.innerHTML += UIstring;
};

Display.prototype.clear = function () {
  let LibraryForm = document.getElementById("libraryForm");
  LibraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length <= 2 || book.author.length <= 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, showMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${showMessage}
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    `;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
};

// Add Submit Event Listener to LibraryForm
let LibraryForm = document.getElementById("libraryForm");
LibraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("Fiction");
  let Nfiction = document.getElementById("NFiction");
  let Comic = document.getElementById("Comic");

  if (fiction.checked) {
    type = fiction.value;
  } else if (Nfiction.checked) {
    type = Nfiction.value;
  } else if (Comic.checked) {
    type = Comic.value;
  }

  let book = new Book(name, author, type);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book successfully got added...");
  } else {
    display.show("danger", "Sorry, Not able to add this book...");
  }
  e.preventDefault();
}
