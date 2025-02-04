const toDo = [];

const btn = document.getElementById('btn');
const texting = document.getElementById('texting');
const printOut= document.getElementById('output1');


btn.addEventListener("click", listing);

function listing(){
    let list = texting.value;
    toDo.push(list);
    printOut.innerHTML=toDo;
    
};
console.log(toDo);