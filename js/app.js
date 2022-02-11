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
// DOM Nodes
const banner = document.querySelector("#page-banner")
console.log('#page-banner node type is:', banner.nodeType)
console.log('#page-banner node Name is:', banner.nodeName)
console.log('#page-banner node has child nodes:', banner.hasChildNodes())
//Cloning a node
const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner)

//Traversing the DOM
console.log('The parent node is: ', bookList.parentNode)
console.log('The parent element is: ', bookList.parentElement.parentElement)

console.log(bookList.children)

//Dom Traversal (SIBLINGS)

console.log('book-list next sibling is: ', bookList.nextSibling)
console.log('book-list next Element sibling is: ', bookList.nextElementSibling)

console.log('book-list next previous sibling is: ', bookList.previousSibling)
console.log('book-list next previous Element sibling is: ', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else'