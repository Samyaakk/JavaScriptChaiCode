"use strict";//treat all JS code as newer version
// alert(3+3) //we are using nodejs not browser 
console.log(3+3)
console.log("hitesh")
//code readability should be high 

let name = "sam"
let age = 3 
let isLogin = false

// number  - 2 to power 53 
// bigInt 
// string ""
// boolean true/false
// null (standalone value)
// undefined 
// symbol => uniqueness 

console.log(typeof"sam")
console.log(typeof name);
console.log(typeof null);//object
console.log(typeof undefined);//undefined 

// concepts 
// primitive -> 
// stored directly in memory (stack)
// 7 
// non primitive -> object ,arrr, functions
//stored in heap , variable store refernce 

//interview quest 
// diff in null and undefined ? 
// null -> assigend intentionally to represent no value 
// undefined -> variable declared but not assisgned 

//NaN?
// means not a number but it's type is number 

//type of null? 
// object 

// BigInt 
// x = 32324324323232n

//typeof array object 

//tricky question 
//console.log(typeof null)
//boject 

//console.log(typeof NaN )
//number

let a = [1,2,3];
let b = a;
b.push(4);
console.log(a);
// allowed becoz objects/arrays copy reference 

// typeof undefined -> undefined  

