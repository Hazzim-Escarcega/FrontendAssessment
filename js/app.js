var titles = document.getElementsByClassName("title");
//converting titles into an array and then printing
//every array item
Array.from(titles).forEach(function(item){
    console.log(item);
})