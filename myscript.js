// Array to store books
const myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; //True or False 
}

// Add book to the list
function addBookToLibrary(title, author, pages, read) {
    const newBook = Book(title, author, pages, read);
    myLibrary.push(newBook);
} 

// 

