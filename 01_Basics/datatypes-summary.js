// #Primitive 
// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreV = 100.3
const isLoggedIn = false;
const temp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);
console.log(typeof id)

const bigNum = 34545354323324n // making it big int by adding n at the last 

//Reference (Non primitive)
//array ,objects,functions

const heroes = ["shaktiman","nagraj","doga"]; // arrays 
//objects datatype kuch bhi ho sakta hai 
let myObj = {
    name:"hitesh",
    age: 22,
}
//function 
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNum);
console.log(typeof myFunction);

//********************************************** */

// memory 
// stack (Primitive), Heap(Non-Primitive) 
let myYoutubename = "samyakSharma"//primitive values goes to stack 
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername)
console.log(myYoutubename);
//object ex. ie. non primitive type goes to heap
// user varaible goes to stack but the values to heap  
let user = {
    email: "user@google.com",
    upi: "user@ybl",
    address: "Jaipur"
}
console.log(user);
console.log(user.email);
//here we are getting the reference so the actual value will be effected as well 
let userTwo  =user
userTwo.email = "hitesh@google.com"
console.log(user.email);
console.log(userTwo.email);
