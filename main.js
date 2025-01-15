// buttons
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twofive = document.getElementById('twofive');
const fifty = document.getElementById('fifty');

const bill = document.getElementById('bill');

let percent;

bill.addEventListener('click', ()=>{
    console.log(bill.value);
});

const fiv = five.addEventListener('click', ()=>{
    precent = 0.05*bill.value;
    return percent;
});
ten.addEventListener('click', ()=>{
    precent = 0.1 * bill.value;
    return precent;
});
fifteen.addEventListener('click', ()=>{
    precent = 0.2 * bill.value;
    return precent;
});
twofive.addEventListener('click', ()=>{
    precent = 0.25 * bill.value;
    return precent;
})
fifty.addEventListener('click', ()=>{
    precent = 0.5 * bill.value;
    return precent;
})

function handleClick(){

    return 
}