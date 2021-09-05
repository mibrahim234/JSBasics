var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list");
listItems = document.getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    // this refers to the specific element that get clicked on and puts it on the screen
    ourHeadline.innerHTML = this.innerHTML;
    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

// takes two arguments, first the one we are looking for and the function we gonna run
function createNewItem() {
    // add new html to ul
    ourList.innerHTML = "nice panda";

}