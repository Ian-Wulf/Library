// Stores books
const myLibrary = [];

let body = document.querySelector("body");

// Constructs each book
function Book(title, author, pubDate, read) {
    let id = crypto.randomUUID(); // unique identifier
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.read = read;
}

// Toggle 'read' status of a book
Book.prototype.toggleRead = function() {
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

function displayBooks() {
    // Container for book display
    let grid = document.createElement("div");
    grid.classList.add("grid");
    body.appendChild(grid);
    // Add books
    myLibrary.forEach(function(book) {
        // console.log(book)
        let card = document.createElement("div");
        card.classList.add("bookCard");
        for(const key in book) {
            if(book.hasOwnProperty(key)) {
                let info = document.createElement("div");
                let property = document.createElement("p");
                let value = document.createElement("p");

                property.innerHTML = `${key.toUpperCase()}:`;
                value.innerHTML = `${book[key]}`; 
                switch (key) {
                    case "title":
                        property.setAttribute("id","title");
                        value.setAttribute("id","title-value");
                        break;
                    case "author":
                        property.setAttribute("id","author");
                        value.setAttribute("id","author-value");
                        break;
                    case "pubDate":
                        property.setAttribute("id","pubDate");
                        value.setAttribute("id","pubDate-value");
                        break;
                    case "read":
                        property.setAttribute("id","read");
                        value.setAttribute("id","read-value");
                        value.innerHTML = value.innerHTML.toUpperCase();
                        break;
                }
               
                info.appendChild(property);
                info.appendChild(value);
                card.appendChild(info);
            }
        }

        grid.appendChild(card);

    });
}

// Add a few books to start
addBook('Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', '07-29-1954', 'read');
addBook('Halo: First Strike','Eric Nylund','12-02-2003','read');
addBook("Ender's Game",'Orson Scott Card','01-15-1985','read');

displayBooks();