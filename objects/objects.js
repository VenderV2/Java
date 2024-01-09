const myLibrary = [];
const body = document.querySelector('body');

const submit = document.querySelector('.submit')
submit.addEventListener('click', () => {
    addBookToLibrary();
})

const show = document.querySelector('.show')
show.addEventListener('click', () => {
    showBooks();
})

const addBook = document.querySelector('.new-book');
addBook.addEventListener('click', () => {
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('inputWindow');
    body.appendChild(bookEntry);

    const title = document.createElement('input')
    title.type = 'text'
    title.setAttribute('id', 'title')
    const author = document.createElement('input')
    author.type = 'text'
    author.setAttribute('id', 'author')
    const pages = document.createElement('input')
    pages.type = 'text'
    pages.setAttribute('id', 'pages')

    bookEntry.appendChild(title)
    bookEntry.appendChild(author)
    bookEntry.appendChild(pages)
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return ("Title: " + this.title + "    " +"Author: " + this.author + "    " + "Pages: " + this.pages + "    ");
    }
}

function addBookToLibrary() {
    const newBook = getBookInput();
    myLibrary.push(newBook);
    console.log(newBook);
}

function getBookInput() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    return new Book(title, author, pages);
}

function showBooks() {
    myLibrary.forEach(book => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        body.appendChild(popup);
        popup.textContent = book.info();
    });
}


