const toDo = [];
const txt1 = document.getElementById('texting');
const bnt1 = document.getElementById('btn');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerHTML = txt1.value;
};

bnt1.addEventListener('click', fun1);
