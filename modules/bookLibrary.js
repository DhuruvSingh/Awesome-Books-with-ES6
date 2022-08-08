class Manipulation {
    static allBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
        books = [];
        } else {
        books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Manipulation.allBooks();
        books.forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>"${book.title}" by ${book.author}</h2>  
        <button class="remove">remove</button>`;
        bookSection.append(li);
        });
    }

    static isItDuplicate(title, author) {
        const books = Manipulation.allBooks();
        for (let i = 0; i < books.length; i += 1) {
        if (title === books[i].title && author === books[i].author) {
            return true;
        }
        }
        return false;
    }

    static addBook(e) {
        e.preventDefault();
        const books = Manipulation.allBooks();
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const error = document.createElement('p');
        error.className = 'alert';
        const errLocation = document.querySelector('#addBook');

        if (title === '' || author === '') {
        error.innerHTML = `
        <small>Please fill all the fields</small>
        `;
        errLocation.appendChild(error);
        } else if (Manipulation.isItDuplicate(title, author) === true) {
        error.innerHTML = `
        <small>Book already exists</small>
        `;
        errLocation.appendChild(error);
        } else {
        const book = new Book(title, author);

        book.id = Math.floor(Math.random() * 100);
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        inputTitle.value = '';
        inputAuthor.value = '';
        const li = document.createElement('li');
        li.classList.add('book');
        li.dataset.id = book.id;
        li.innerHTML = `
        <h2>${book.title} "by"               ${book.author}</h2>  
        <button class="remove">remove</button>`;
        bookSection.append(li);
        }
        if (error.classList.contains('alert') && (document.querySelector('.alert') !== null)) {
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
        }
    }

    static removeBook(elem) {
        if (elem.classList.contains('remove')) {
        elem.parentElement.remove();
        localStorage.removeItem('books');
        }
    }
}