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


