alert("Hello");

console.log("Code is running...")

var a = prompt("Enter an integer : ");
console.log(a);

var isTrue = confirm("Are you sure u want to leave this page?");
if(isTrue){
    console.log("Your answer is 'yes' ");
}
else{
    console.log("Your answer is 'no' ");
}

document.title = "Hello";
document.body.style.backgroundColor = "red";