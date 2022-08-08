/* eslint max-classes-per-file: ["error", 2] */

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitButton = document.getElementById('addbutton');
const currentTime = document.getElementById('currentTime');

onload=reload;

function reload() {
  bookSection.style.display = 'none'
  form.style.display = 'contents'
  mainTitle.style.display = 'none'
  contact.style.display = 'none'
}

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
}

document.addEventListener('DOMContentLoaded', Manipulation.displayBooks);

submitButton.addEventListener('click', Manipulation.addBook);

bookSection.addEventListener('click', (e) => {
  if (e.target.previousElementSibling) {
    Manipulation.removeBook(e.target);
    const newBooks = JSON.parse(localStorage.getItem('books'));
    newBooks.forEach((book, index) => {
      if (book.author === e.target.previousElementSibling.textContent) {
        newBooks.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(newBooks));
  }
});

setInterval(() => {
  const date = new Date();
  currentTime.textContent = date;
}, 500);

