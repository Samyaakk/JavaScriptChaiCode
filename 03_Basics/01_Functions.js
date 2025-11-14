// console.log("H");
// console.log("s");
// console.log("A");
// console.log("M");
// doing it 100 times ? like this no there comes function 

function MyName(){
    console.log("S");
    console.log("A");
    console.log("M");
}
MyName // reference 
MyName() // execution 

function Add(n1,n2){ // function defination -> parameters 
    console.log(n1+n2);
}
Add();
Add(1,2);
Add(1,"2");
Add("2","a"); // function calling called arguments 

const res = Add(4,6);
console.log("Result: ",res);//undefined 


function addTwo(n1,n2){
    let res = n1+n2
    return res
}
const result = addTwo(4,6);
console.log("result: "+result);

function loginUserMsg(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("Samyak"));
console.log(loginUserMsg());//we don't give anyting it gives undefined . 
//undefined is false by default in js so we use !undefined in if statement to check . 
//we can also give default values to avoid undefined condition ueiing = operation in the parameter itself 

function calCartPrice(...n1){
    return n1
}
console.log(calCartPrice(100,200,300));
//we are passing lot of values . 
// ... is used rest as well as spread based on their use case 
//here it's called rest

const user = {
    username: "hitesh",
    price:199
}
function handleObject(anyObj){
    console.log(`Username is : ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user);

const myarr = [200,300,400]
function retsecondVal(myarr){
    return myarr[1]
}
console.log(retsecondVal(myarr));