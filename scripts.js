/*
Library
*/

let library = [];

addBookToLibrary("kingrat", "doctor spielberg", 567, true, "the best god damn book ever made");
addBookToLibrary("ratking", "mr henry", 57, true, "the best god damn book ever made");
addBookToLibrary("boyrat", "mr henry", 57, true, "the best god damn book ever made");


function Book(title, author, pages, isRead, info) {
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.isRead = isRead;
    this.info   = info;
}

function addBookToLibrary(title, author, pages, isRead, info) {
    library.push(new Book(title, author, pages, isRead, info));
    document.reload;
    return (console.log("added new book"));
}

function render() { 
    library.forEach(element => {
        new Object();
            form = document.getElementById("form");
            button = document.createElement("button");
            shelf = document.getElementById("autoshelf");
            title = document.createElement("h1");
            author = document.createElement("h3");
            pages = document.createElement("p");
            isread = document.createElement("p");
            info = document.createElement("p");

        title.innerHTML = element.title;
        author.innerHTML = element.author;
        pages.innerHTML = element.pages;
        isread.innerHTML = element.isread;
        info.innerHTML = element.info;

        shelf.appendChild(title);
        shelf.appendChild(author);
        shelf.appendChild(pages);
        shelf.appendChild(isread);
        shelf.appendChild(info);

    });
}

render();
