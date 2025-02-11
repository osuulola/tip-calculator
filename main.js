// buttons
const five = document.getElementById('5');
const ten = document.getElementById('10');
const fifteen = document.getElementById('15');
const twofive = document.getElementById('25');
const fifty = document.getElementById('50');
const custom = document.getElementById('custom');

const tip = document.getElementById('tip');
const total = document.getElementById('total');

const bill = document.getElementById('bill');
const people = document.getElementById('people');

const reset = document.getElementById('reset');

reset.addEventListener('click', ()=>{
    bill.value = '';
    people.value = '';
    tip.innerText = '$0.00', 
    total.innerText = '$0.00';
})

let precent, person, num;
 
five.addEventListener('click', ()=>{
    num = 0.05
    handleClick()
});

ten.addEventListener('click', ()=>{
    num = 0.1;
    handleClick()
});
fifteen.addEventListener('click', ()=>{
    num = 0.15;
    handleClick()
});
twofive.addEventListener('click', ()=>{
    num = 0.25
    handleClick()
})
fifty.addEventListener('click', ()=>{
    num = 0.5;
    handleClick()
})
custom.addEventListener('keydown', ()=>{
    if (event.key === 'Enter'){
        custom.contentEditable = 'false';
        handleCustom();
        
    }  
})


function handleClick(){
    precent = Number(bill.value) * num;
    person = Number(people.value);
    let ans = (precent/person).toFixed(2);
    if(bill.value > 0){
         tip.innerText = '$'+ans;
         pass = Number(ans)
         handleTotal(pass)
    } 
}
function handleTotal(n) {
    let ans = Number(total.innerText.substring(1));
    ans += n;
    console.log(ans)
    total.innerText = '$'+ ans.toFixed(2);
}
function handleCustom() {
    num = (Number(custom.innerText))/100;
    handleClick();
    custom.innerText = 'Custom';
    custom.contentEditable = 'true';
}