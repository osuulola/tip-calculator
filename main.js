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

let pen = Number(bill.value);
let person = Number(people.value);

 five.addEventListener('click', ()=>{
    precent = Number(bill.value) * 0.05;
    console.log(precent)
    tip.innerText = precent/person;
});
pen = ten.addEventListener('click', ()=>{
    precent = 0.1 * bill.value;
    return precent;
});
pen = fifteen.addEventListener('click', ()=>{
    precent = 0.2 * bill.value;
    return precent;
});
pen = twofive.addEventListener('click', ()=>{
    precent = 0.25 * bill.value;
    return precent;
})
pen = fifty.addEventListener('click', ()=>{
    precent = 0.5 * bill.value;
    return precent;
})
custom.addEventListener('click', ()=>{
    edit(custom.innerText);
})

function handleClick(){
    tip.value = pen;
}

function edit(text){
    text = '';
}