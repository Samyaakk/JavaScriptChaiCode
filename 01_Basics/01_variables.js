const accId = 144533 
let accEmail = "sam@google.com"
var accPwd = "12345"
accCity = "Jaipur"
let accState;
// accId = 2
accEmail = "hc@hc.com"
accPwd = "3223"
accCity = "Jaipur"

console.log(accId);
console.log([accEmail,accPwd,accCity,accState]);

//interview questions 
/*
Prefer not to use var because of issue in block scope and functional scope as it ignores blokc scope   */

// what is temporal dead zone ? 
// phase btw hoisting and initializtion where let and const exist but can't be accessed . 

// can const object change ? 
// yes 
const obj= {a:10,b:20}
obj.b=30;
console.log(obj);
// but we can't reassin the obj itself 

// why const must be initialized while declaring ? 
// becoz js requires it's binding to be fixed. 

// tricky questions 
// output
console.log(a);
var a = 10;
// -> undefined (var hoisting)

// console.log(b);
// let b = 10;
//reference error 

const arr = [1,2,3];
arr.push(4);
console.log(arr);
//allowed 


//block scoping 
let x = 10;
{
    let x = 20;
    console.log(x);//20
}
console.log(x); //10