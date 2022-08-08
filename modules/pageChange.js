const bookSection = document.getElementById('books');
const showBookNav = document.getElementById('booksList');
const form = document.getElementById('addform');
const contact = document.getElementById('contact');
const showformNav = document.getElementById('newBook');
const showcontactNav = document.getElementById('Contact');
const mainTitle = document.getElementById('main-title');

showBookNav.addEventListener('click', () => {
    bookSection.style.display = 'flex'
    contact.style.display = 'none'
    form.style.display = 'none'
    mainTitle.style.display = 'block'
  
});

showformNav.addEventListener('click', () => {
    bookSection.style.display = 'none'
    form.style.display = 'contents'
    mainTitle.style.display = 'none'
    contact.style.display = 'none'
});

showcontactNav.addEventListener('click', () => {
    bookSection.style.display = 'none'
    form.style.display = 'none'
    mainTitle.style.display = 'none'
    contact.style.display = 'block'
});