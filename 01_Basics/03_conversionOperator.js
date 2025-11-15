let score = 33 
console.log(typeof score)
console.log(typeof (score))

let score1 = "33abc"
let valInNo = Number(score1)
console.log(typeof valInNo)
console.log(valInNo)

let score2 = null 
let valInNo1 = Number(score2)
console.log(typeof valInNo1)
console.log(valInNo1)

let score3 = undefined
let valInNo2 = Number(score3)
console.log(typeof valInNo2)
console.log(typeof(valInNo2))

//"33" - 33 
//"33abc" - NaN
//true - 1 false - 0

let isLogIn = 1 
let booleanIsLogIn = Boolean(isLogIn)
console.log(booleanIsLogIn);

let someNo  = 33 
let StringNo = String(someNo)
console.log(StringNo)
console.log(typeof StringNo)

//operations 
let value  = 3
let negValue = -value
console.log(negValue);

console.log(2**3);
console.log(3%6);

let str1 = "hello"
let str2 = "hitesh"
let str3 = str1+str2;
console.log(str3)

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2");//32

console.log(+true)//1
// console.log(true+)//error
console.log(+"");

let num1,nums2,num3 
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);


// concept 
// Arithmetic → + - * / % **
// Comparison → == != === !== > >= < <=
// Logical → && || !
// Assignment → = += -= *= /=
// Ternary → condition ? a : b
// Nullish coalescing → ??
// Optional chaining → obj?.value

//== checks value after type conversion 
// === checks type + value (strict) 

// tricky questions 
console.log(1+"1")//11
console.log(1-"1")//0
console.log(true+1)//2
console.log("5"-"2")//3
console.log("5"+2)//52

//type conversion 
// explicit conversion 
// Number("10")//10
// String(50)//"50"
// Boolean("")//false

//implicit conversion (automatically)
// "10"*2//20
// "10"+2//"102"

// imp points -> 
// + prefer string conversion 
// -,*,/ prefer no. conversion 
// boolean() on truthy/flasy values 
// empty arr[] converts to "" or 0 dependign on context 

//tricky ques
// Number("") //0
// Number(" ")//0
// Number(true)//1
// Number(false)//0
// Number(null)//0
// Number(undefined)//NaN

// typeof Operator 
// tells type of a value 
// typeof 10        // "number"
// typeof "hi"      // "string"
// typeof true      // "boolean"
// typeof null      // "object"   (JS bug)
// typeof []        // "object"
// typeof {}        // "object"
// typeof undefined // "undefined"
// typeof function(){} // "function"


// Hoisting 
// js moves declaration to top of scope during compilation 
//var hoisted with val undefined 
//let/const hoisted but in tdz 
//functions are fully hoisted 

// console.log(a);
// var a = 10;
// //undefined

// console.log(b); 
// let b = 10;
// // ReferenceError

// foo();  
// function foo(){ console.log("hello") }
// // hello
