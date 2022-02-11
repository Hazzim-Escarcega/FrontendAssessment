//get element by class
var titles = document.getElementsByClassName("title")
console.log(titles[0]);
console.log(titles[1]);
//get element by tag
var lis = document.getElementsByTagName("li")
console.log(lis)

//cycle trough a collection of elements
for(i = 0; i < titles.length; i++){
    console.log(titles[i]);

}