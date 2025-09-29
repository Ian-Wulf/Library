// Stores books
const myLibrary = [];

let body = document.querySelector("body");

// Constructs each book
function Book(title, author, pubDate, read) {
    this.id = crypto.randomUUID(); // unique identifier
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.read = read;
}

// Toggle 'read' status of a book
Book.prototype.toggleRead = function() {
    if(this.read === "read") {
        this.read = "not read";
    } else {
        this.read = "read";
    }
};

function correctDateFormat(date) {
    
}

function reformatDate(date) {
  
  const month = date.substring(5, 7);
  const day = date.substring(8);
  const year = date.substring(0, 4);

  return `${month}-${day}-${year}`;
}

function addBook(title, author, pubDate, read) {
    const newBook = new Book(title, author, pubDate, read);
    myLibrary.push(newBook);
}

function removeBook(bookID) {
    let booktoRemove = myLibrary.findIndex(book => book.id === bookID);
    myLibrary.splice(booktoRemove, 1);
    displayBooks();
}

function displayBooks() {
    let grid = document.querySelector(".grid");
    // Establishes initial card display
    if (!grid) {
        grid = document.createElement("div");
        grid.classList.add("grid");
        body.appendChild(grid);
    }

    grid.innerHTML = "";
    
    // Add books
    myLibrary.forEach(function(book) {
        
        let card = document.createElement("div");
        card.classList.add("bookCard");
        for(const key in book) {
            if(book.hasOwnProperty(key) && key !== "id") {
                let info = document.createElement("div");
                info.classList.add("info");
                let property = document.createElement("p");
                let value = document.createElement("p");

                property.innerHTML = `${key.toUpperCase()}:`;
                value.innerHTML = `${book[key]}`; 
                switch (key) {
                    case "title":
                        property.classList.add("title");
                        value.classList.add("title-value");
                        break;
                    case "author":
                        property.classList.add("author");
                        value.classList.add("author-value");
                        break;
                    case "pubDate":
                        property.classList.add("pubDate");
                        property.innerHTML = "RELEASE:"
                        value.classList.add("pubDate-value");
                        break;
                    case "read":
                        property.classList.add("read");
                        value.classList.add("read-value");
                        value.innerHTML = value.innerHTML.toUpperCase();
                        break;
                }
               
                info.appendChild(property);
                info.appendChild(value);
                card.appendChild(info);
            }
        }

        let lastRow = document.createElement("div");
        lastRow.classList.add("lastRow");
        card.appendChild(lastRow);

        let changeRead = document.createElement("button");
        changeRead.setAttribute("type", "button");
        changeRead.setAttribute("id", "toggle-read");

        if (book.read === "read") {
            changeRead.innerHTML = "unread";
        } else if (book.read === "not read") {
            changeRead.innerHTML = "read";
        }

        changeRead.addEventListener("click", function() {
            book.toggleRead();
            displayBooks();
        });

        lastRow.appendChild(changeRead);

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("id", "remove");
        removeBtn.innerHTML = "remove";

        removeBtn.addEventListener("click", function() {
            removeBook(book.id);
        });

        lastRow.appendChild(removeBtn);

        grid.appendChild(card);

    });
}

// Add a few books to start
addBook('Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', '07-29-1954', 'read');
addBook('Halo: First Strike','Eric Nylund','12-02-2003','read');
addBook("Ender's Game",'Orson Scott Card','01-15-1985','read');

displayBooks();

const newBookButton = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const submitBtn = document.getElementById("submit-button");



newBookButton.addEventListener('click', function() {
    dialog.showModal();
    dialog.classList.add("dialog");
});

submitBtn.addEventListener('click', function() {
    let form = document.querySelector(".newbookform");

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pubDate = document.getElementById("pubDate").value;

    const read = document.getElementById("read");
    const notRead = document.getElementById("not-read");
    let readStatus = "";

    if (read.checked) {
        readStatus = "read";
    } else if (notRead.checked) {
        readStatus = "not read";
    } 

    addBook(title, author, pubDate, readStatus);
    displayBooks();

    dialog.close();
    dialog.classList.remove("dialog");
    form.reset();
});