let r1 = Math.random();
let w1,w2,w3;
if(r1<0.33){
    w1 = "Crazy";
    w2 = "Engine";
    w3 = "Bros";
}
else if(r1>=0.33 && r1<0.66){
    w1 = "Amazing";
    w2 = "Foods";
    w3 = "Limited";
}
else{
    w1 = "Fire";
    w2 = "Garments";
    w3 = "Hub";
}


console.log(`${w1} ${w2} ${w3}`);