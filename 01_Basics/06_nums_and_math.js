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


// concepts 
//only one no type 
//type of NaN (number)

Number.isNaN(NaN)//true
Number.isInteger(10.5)//false
(5.678).toFixed(2)//return a string "5.67"
parseInt("10px")//10

// due to binary floating point 
// 0.1+0.2===0.3//false;

// Math object 
Math.round(4.6)
Math.floor(4.9)
Math.ceil(4.1)
// abs,max,pow,sqrt,

//interview questions 
//typeof NaN? number 
// 0.1+0.2 !=0.3 ? -> floating point precision issues 
//generate a random no btw 1 to 10 
console.log(Math.Floor(Math.random()*10)+1);
//toFixed return a string not a number 

console.log(typeof NaN);//number
console.log(parseInt("15a2"));//15
console.log(5 + "5");//55
console.log(Number(" "))//0
console.log(Math.floor(-4.2))//-5
