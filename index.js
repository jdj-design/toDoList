const toDo = [];

const btn = document.getElementById('btn');
const texting = document.getElementById('texting');
const printOut = document.getElementById('output1');

btn.addEventListener("click", () => {
    const newItem = document.createElement('p');
    newItem.textContent = texting.value;
    printOut.appendChild(newItem);
});


/*function listing(){
    const list = texting.value.trim();
    toDo.push(list);
    printOut.innerHTML=toDo;
    
    
};
*/

