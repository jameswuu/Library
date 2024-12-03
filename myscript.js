// Array to store books
let myLibrary = [
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

        // Create a cell for each button
        const cell = document.createElement('td');

        // Create a button element for changing the read status
        const readingButton = document.createElement("button");
        readingButton.id = book.title;
        readingButton.innerText = "Read Already!?"

        // Create a button element for removing the book
        const button = document.createElement("button");
        button.id = book.title;
        button.innerText = "Remove this book"

        console.log(`The id of the current button is ${button.id}`)

        // Append the button to the cell
        cell.appendChild(readingButton);
        cell.appendChild(button); 

        // Append the cell to the row
        row.appendChild(cell);

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


// Remove book from array
document.querySelector("#table-body").addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON') {
        // Debugging Line
        console.log(event.target.id);
        const title = event.target.id;

        // Check which button is clicked
        if (event.target.innerHTML === "Remove this book") {
            // Remove the book from the array
            myLibrary = myLibrary.filter(book => book.title !== title);
        } else {
            // Change the Status of the book
            console.log(`Status function ran`);

            myLibrary = myLibrary.map(book => {
                if (book.title === title) {
                    book.read = book.read === "Read" ? "Not Read" : "Read";
                }
                return book;
            })
        }    

        // Update the display after removing the book
        BookDisplay();
    }
})


BookDisplay();