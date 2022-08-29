let myLibrary = [];
const data = document.getElementById('data');
const btn = document.getElementById('form-btn');

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const dataTitle = data.querySelector('#title').value;
  const dataAuthor = data.querySelector('#author').value;
  const dataPages = data.querySelector('#pages').value;
  const dataIsRead = data.querySelector('#isRead').value;
  myLibrary.push(new Book(dataTitle, dataAuthor, dataPages, dataIsRead));
}

btn.addEventListener('click', addBookToLibrary);