// Array to store books
const myLibrary = [
    // Testing for displaying the books
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218, read: "Read" },
    { title: "1984", author: "George Orwell", pages: 328, read: "Not Read" },
];

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

// Display book
function BookDisplay(){
    // Initailize the existing table
    const table = document.getElementById('table-body');

    // Loop through each book in the array
    for(book of myLibrary) {
        const row = document.createElement('tr');

        // Loop through each property in the book object
        for (const item in book) {
            // Create a cell for each property
            const cell = document.createElement('td');
            cell.textContent = book[item]; // Set the cell's text to the book's property value
            row.appendChild(cell); // Append the cell to the row
        }

        // Assign the new row to the table
        table.appendChild(row);
    }
}


// Dialog Button
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


BookDisplay()