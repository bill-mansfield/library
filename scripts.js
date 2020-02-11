/*
Library
*/

let library = [];

addBookToLibrary("kingrat", "doctor spielberg", 567, true, "the best god damn book ever made");
addBookToLibrary("ratking", "mr henry", 57, true, "the best god damn book ever made");
addBookToLibrary("boyrat", "mr henry", 57, true, "the best god damn book ever made");

/*
Dom trash
*/

var bookcase = document.getElementById("autoshelf");
var shelf = document.createElement("div");

/*
Book Constuctor
*/

function submitForm() {
    var formTitle = document.getElementById("title").value;
    var formAuthor = document.getElementById("author").value;
    var formPages = document.getElementById("pages").value;
    var formIsread = document.getElementById("isread").value;
    var formInfo = document.getElementById("info").value;
    addBookToLibrary(formTitle, formAuthor, formPages, formIsread, formInfo);
    renderNewBook();
}

function Book(title, author, pages, isRead, info) {
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.isRead = isRead;
    this.info   = info;
}

function addBookToLibrary(title, author, pages, isRead, info) {
    library.push(new Book(title, author, pages, isRead, info));
}

var iterate = 0;

function renderNewBook() {
    var shelf = document.createElement("div");

    for (i=0; i<5; i++) {
        var newBook = library[library.length-1];
        var arr = Object.values(newBook);
        var arrKeys = Object.keys(newBook);

        var paragraph = document.createElement("p");
        paragraph.innerHTML = arr[i];

        if (arrKeys[i] === "isRead") {
            paragraph.setAttribute("title", arr[i]);
        }

        shelf.appendChild(paragraph);
    }

    iterate++;
    var removebtn = document.createElement("button");
    removebtn.innerHTML = "Remove";
    var changeReadStatus = document.createElement("button");
    changeReadStatus.innerHTML = "Have you read this book?";
    changeReadStatus.addEventListener("click", updateIsRead);
    removebtn.setAttribute("index", iterate);
    removebtn.addEventListener("click", removeBook);
    shelf.setAttribute("id", iterate);
    shelf.appendChild(removebtn);
    shelf.appendChild(changeReadStatus);
    bookcase.appendChild(shelf);
}

function updateIsRead() {
    Book.prototype.isRead
    if (this)
}

function removeBook() {
    var parentID = this.getAttribute("index");
    document.getElementById(parentID).remove();
}

function render() { 
    var c = 0;
    library.forEach(element => {
        var shelf = document.createElement("div");
        for (i=0; i<5; i++) {
            var arr = Object.values(element);
            var paragraph = document.createElement("p");

            paragraph.innerHTML = arr[i];
            shelf.appendChild(paragraph);
        }
        c++;
        var removebtn = document.createElement("button");

        removebtn.innerHTML = "Remove";
        removebtn.setAttribute("index", c);
        removebtn.addEventListener("click", removeBook);
        shelf.appendChild(removebtn);
        bookcase.appendChild(shelf);
    });
}

render();
