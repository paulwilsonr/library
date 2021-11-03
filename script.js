let myLibrary = [];
let formOpen = false;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read)
    this.info = function () {
        let isItRead = '';
        if (this.read) {
            isItRead = 'Read';
        } else {
            isItRead = 'Not read yet';
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isItRead}`;
    }
};

function addBookToLibrary() {
    let title = document.querySelector('#bookName').value;
    let author = document.querySelector('#authorName').value;
    let pages = document.querySelector('#pageNums').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showAllBooks();
    document.querySelector('#newBookForm').reset();
};

function deleteBook(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    let deletedBook = document.getElementById(`newBook${bookIndex}`);
    deletedBook.parentElement.removeChild(deletedBook);
};

function changeReadStatus(bookIndex) {
    if (myLibrary[bookIndex].read) {
        myLibrary[bookIndex].read = false;
    } else {
        myLibrary[bookIndex].read = true;
    };
    let currentBook = document.getElementById(`book${bookIndex}`);
    currentBook.textContent = myLibrary[bookIndex].info();
}

function showAllBooks() {
    let bookNumber = myLibrary.length - 1;
    let displayText = myLibrary[bookNumber].info();
    newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.setAttribute('id', `newBook${bookNumber}`)
    document.getElementById('bookList').appendChild(newBook);
    bookText = document.createElement('p');
    bookText.setAttribute('id', `book${bookNumber}`);
    bookText.textContent = myLibrary[bookNumber].info();
    document.getElementById(`newBook${bookNumber}`).appendChild(bookText);
    deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.setAttribute('onclick', `deleteBook(${bookNumber})`);
    deleteButton.textContent = 'Delete Book';
    document.getElementById(`newBook${bookNumber}`).appendChild(deleteButton);
    changeRead = document.createElement('button');
    changeRead.classList.add('changeRead');
    changeRead.setAttribute('onclick', `changeReadStatus(${bookNumber})`);
    changeRead.textContent = 'Change Read Status';
    document.getElementById(`newBook${bookNumber}`).appendChild(changeRead);
};

function showForm() {
    let hiddenForm = document.querySelector('#hiddenForm');
    let newBookButton = document.querySelector('#newBookButton');
    if (!formOpen) {
        hiddenForm.style.display = 'block';
        newBookButton.textContent = 'Close';
        formOpen = true;
    } else {
        hiddenForm.style.display = 'none';
        newBookButton.textContent = 'NEW BOOK';
        formOpen = false;
    }
};



document.getElementById('newBookButton').addEventListener('click', showForm);
document.getElementById('submitButton').addEventListener('click', addBookToLibrary);

