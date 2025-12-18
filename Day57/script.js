for(let i=0;i<=5;i++) 
    console.log(i);

const obj = {
    name:"Aditya Patel",
    age:20
}
for(const key in obj) 
    console.log(key);

let s = "aditya"
for(const char of s) 
    console.log(char);

let arr = [1,2,"hdd","36.5", true];
for(element of arr)
    console.log(element);



let i = 0;
while(i<5){
    console.log(i);
    i++;
}