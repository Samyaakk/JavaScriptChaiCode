const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
//this refers to current context 
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
console.log(this)
//browser ke andr global object is window 

// function chai(){
//     let username = "Sam"
//     console.log(this.username);
// }
// chai()
//this is not used in functions it's giving undefined . 
//this works for objects not in functions 

const chai = ()=>{
    let username = "Sam"
    console.log(this.username);
}
//this is arrow function  () => {}  syntax //and can be hold inside a variable 
// const addTwo  = (n1,n2)=> {
//     return n1 + n2
// }
// console.log(addTwo(3,4))

//implicit return is. we dont need to write return in the syntax as we try it in one line 
const addTwo = (n1,n2) => n1+n2
console.log(addTwo(3,4))
//we can use small brackets here but not curly ones 

//excplicit ones are thsoe where we write return keyword 

const myArr = [2,3,4,5,6]
// myArr.forEach()