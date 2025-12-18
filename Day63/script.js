let arr = [1,2,3,'4hdb'];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr[0]);
arr[0] = 4587
console.log(arr);



console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr);


console.log(arr.push(100));
console.log(arr);


console.log(delete arr[0]);
console.log(arr[0]);


let c1 = [1,2,3];
let c2 = [4,6,5];
console.log(c1.concat(c2));

let c3 = [7,8];
console.log(c1.concat(c2,c3));
console.log(c1.concat(9));

let s = [9,2,5];
s.sort();
console.log(s)

console.log(Math.min.apply(null,s));
