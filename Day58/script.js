fun();
function fun(){
    console.log("Hello");
}
fun();


function sum(a,b){
    return a+b;
}
console.log(sum(5,8));



function fun(a,b,c=10){
    console.log(a,b,c);
}
fun(10);
fun(10,13);
fun(10,12,4);



// Arrow-function
const fun1 = (x)=>{
    console.log(x);
}
fun1(45)

let myFunction = (a, b) => console.log(a * b);
myFunction(12,2);


let myFunction1 = function(a, b) {return a * b}
console.log(myFunction1(10,5));