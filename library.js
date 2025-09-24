// Stores books
const myLibrary = [];

// Constructs each book
function Book(title, author, pubDate, read) {
    let id = crypto.randomUUID(); // unique identifier
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.read = read;
}

// Toggle 'read' status of a book
Book.prototype.isRead = function() {
    if(this.read = "read") {
        this.read = "not read";
    } else {
        this.read = "read";
    }
};

// Adds a book to library
function addBook(title, author, pubDate, read) {
    const newBook = new Book(title, author, pubDate, read);
    myLibrary.push(newBook);
}

// Display each book
function displayBooks() {
    // Testing in console for now
    myLibrary.forEach(function(book) {
        console.log(book)
    });
}

// Add a few books to start
addBook('Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', '07-29-1954', 'read');
addBook('Halo: First Strike','Eric Nylund','12-02-2003','read');
addBook("Ender's Game",'Orson Scott Card','01-15-1985','read');
displayBooks();