// const userEmail = "h@hitesh.ai"
// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("don't have user email");
// }

//falsy values 
// false,0,-0,BigInt 0n, "",null, undefined,NaN

// else all are truthy values 
// some may surprise u -> 
// "0" , 'false', " ", [],{} ,function(){}

// const userEmail = []
// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// const obj = {}
// if(Object.keys(obj).length===0){
//     console.log("Object is empty");
// }

// logical operator 
// relational operator

//Nullish Coalescing Operator(??) : only for (null undefined )
let val1;
// val1 = 5??10
val1 = null??10
console.log(val1);

var1 = undefined??15
console.log(var1);


//terniary operator 
// condition ? true:false 
