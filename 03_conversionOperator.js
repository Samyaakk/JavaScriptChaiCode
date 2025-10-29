let score = 33
console.log(typeof score);
score = "33a"
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let x = null;
console.log(x);
x = undefined;
console.log(x);
x = true;
console.log(x);


//"33" ==> 33 
// "33abdc" ==> NaN
// true ==> 1; false=> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1==> true , 0 ==> false 
// "" -> false , "sdfds"==> true

let someNumber  = 33 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)