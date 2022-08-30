let myLibrary = [];
const form = document.getElementById('form-data');
const table = document.getElementById("book-table-body");
const emptyDisplay = document.getElementById("empty-library");

function displayBooks() {
  table.innerHTML = '';
  let isReadDisp;
  myLibrary.forEach((book, i) => {
    if (book.isRead) {
      isReadDisp = "Read"
      classStatus = 'read'
    }
    else {
      isReadDisp = "Not Read"
      classStatus = 'not-read'
    }
    table.innerHTML += `<tr id=${i}>
                          <td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.pages}</td>
                          <td><button class="read-status ${classStatus}" id="${i}">${isReadDisp}</button></td>
                          <td><button class="remove-row" id="${i}">Remove</button></td>
                        </tr>`
  });

  if (table.childElementCount === 0) {
    emptyDisplay.style.display = 'block';
  }
  else {
    emptyDisplay.style.display = 'none';
  }
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function doesBookExist(dataTitle) {
  if (myLibrary.some(book => book.title.toLowerCase() === dataTitle.toLowerCase())) {
    return true;
  }
  return false;
}

function addBookToLibrary(e) {
  e.preventDefault()
  const dataTitle = form.querySelector('#title').value;
  const dataAuthor = form.querySelector('#author').value;
  const dataPages = form.querySelector('#pages').value;
  const dataIsRead = form.querySelector('#isRead').checked;
  if (!doesBookExist(dataTitle)) {
    myLibrary.push(new Book(dataTitle, dataAuthor, dataPages, dataIsRead));
    displayBooks();
  }
}

function removeBook(e) {
  console.log(e.target.className);
  if (e.target.className == 'remove-row') {
    myLibrary.splice(e.target.id, 1);
  }
  else {
    myLibrary[e.target.id].isRead = !myLibrary[e.target.id].isRead;
  }
  displayBooks();
}

table.addEventListener('click', removeBook);
form.addEventListener('submit', addBookToLibrary);
displayBooks();