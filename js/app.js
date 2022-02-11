const wrap = document.querySelector("#wrapper");
console.log(wrap);
const wmf = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wmf);
//finds and selects the first element
var books = document.querySelector("#book-list li .name")
console.log(books)
//finds and selects all the elements within the query
books = document.querySelectorAll("#book-list li .name")
Array.from(books).forEach(function(book){
    console.log(book.textContent)
    book.textContent += "{Book Title}"
}) 

const bookList = document.querySelector("#book-list");
//bookList.innerHTML = '<h2>Books and more books</h2>'
bookList.innerHTML += '<p>This is how you add HTML...</p>'
