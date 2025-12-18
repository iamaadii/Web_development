//factorial using for loop
let num = 5;
let sum = 1;
while(num>0){
    sum *= num;
    num--;
}
console.log(sum);


//factorial using reduce()
let arr = [1,2,3,4,5];
console.log(arr.reduce(fun));

function fun(total,val){
    return total * val; 
}


let ans = arr.reduce((total,val)=>{
    return total*val;
});
console.log(ans);