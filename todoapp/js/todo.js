
function initialize() {
    loadToDoList();
}


function loadToDoList() {
    //TASK 1: Get tne number of key-value pairs stored in localStorage.
    var length = localStorage.length;

    //TASK 2: Create an array to hold the list of TO-DO items.
    const todos = [];

    //TASK 3: Collect each key item and store it in the array.
    for (var i = 0; i < length; ++i) {
        todoList[i] = localStorage.key(i);
    }

    todoList.sort();

    var markup = "<ul>";
    for(var keyIndex in todoList) {
        //A. GRAB THE ITEM
        var items = localStorage.getItem(todoList[keyIndex]);

        //B. ADD THE LABEL
        markup += "<li><span>" + todoList[keyIndex] + "</span>";

        //C. ADD THE DELETE BUTTON
        markup += "<input id = '" + todoList[keyIndex] + "' type = 'button' " + "value = 'Delete' onclick = 'deleteTag(id)'>";

        //D. CLOSE THE LI
        markup += "</li>";
    }
    markup += "</ul>";
}


function addItem() {


}


function clearAllItems() {

}