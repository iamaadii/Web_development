let r = Math.random();
let a = prompt("Enter value of a : ");
let c = prompt("Enter operator : ")
let b = prompt("Enter value of b : ");

const obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
}

if(r < 0.1){
    alert(` ${eval(`${a} ${c} ${b}`)}`);
}
else {
    alert(` ${eval(`${a} ${obj[c]} ${b}`)}`);
}
