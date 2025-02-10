// buttons
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twofive = document.getElementById('twofive');
const fifty = document.getElementById('fifty');
const custom = document.getElementById('custom');

const tip = document.getElementById('tip');
const total = document.getElementById('total');

const bill = document.getElementById('bill');
const people = document.getElementById('people');

const reset = document.getElementsByTagName('button');

let person;


 five.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.05;
    person = Number(people.value);
    tip.innerText = (precent/person).toFixed(2);
    total.innerText += tip.innerText;
});
ten.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.1;
    person = Number(people.value);
    tip.innerText = (precent/person).toFixed(2);
    total.innerText += tip.innerText;
});
fifteen.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.15;
    person = Number(people.value);
    tip.innerText = (precent/person).toFixed(2);
    total.innerText += tip.innerText;
});
twofive.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.25;
    person = Number(people.value);
    tip.innerText = (precent/person).toFixed(2);
    total.innerText += tip.innerText;
})
fifty.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.5;
    person = Number(people.value);
    tip.innerText = (precent/person).toFixed(2);
    total.innerText += tip.innerText;
})
custom.addEventListener('click', ()=>{
    edit(custom.innerText);
})

function handleClick(){
    
}

function edit(text){
    text = '';
}