const score  = 100;
console.log(score);
const balance = new Number(100);//diff in output 
// with the help of prototype we see the properties of that 
console.log(balance);

console.log(typeof balance.toString());
console.log(typeof balance);
console.log(balance.toFixed(2))//setting the precision value 

const no2 = 23.9744
console.log(no2.toPrecision(3));

const no3 = 1000000
console.log(no3.toLocaleString('en-IN'));//, with us standard easy to count the zeros 

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,4,5,6,67,0));
// console.log(Math.max(2,4,4,5,5));

console.log(Math.random());//value btw 0 to 1 
//so we customize it acc. to what the random values range we want 
console.log((Math.random()*10)+1); 

const min = 10
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1)) + min)

