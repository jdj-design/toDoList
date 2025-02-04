console.log('My code is running');


/* below will be the event for 
clicking the add item*/

const toDoList = [];
const textField = document.getElementById("textBox");
const addButton = document.getElementById("addItem");

addButton.addEventListener("click", () =>{
    const newEntry = textField.value;
    toDoList.push(newEntry);
})
