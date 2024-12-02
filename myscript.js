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
    console.log(`Title is ${title}
        Author is ${author}
        Pages is ${pages}
        Status is ${read}`)    

    // Create a new instance 
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    BookDisplay();
    console.log(`Add book function ran`)    

} 


// Display book
function BookDisplay(){
    // Initailize the existing table
    const table = document.getElementById('table-body');
    
    // Clear the existing content of the table body
    table.innerHTML = ''; // This effectively removes all current rows

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

// "Add books" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


// Add book to the array
document.querySelector("#book-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the data from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("status").value;

    // Add Book to the array
    addBookToLibrary(title, author, pages, read);

    console.log(`Form Ran`)    
})


BookDisplay();