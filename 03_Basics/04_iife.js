// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    //named iffi 
    console.log('DB Connected');
})();

// this is direct execution .ie iffe using () 
// global scope se problem hoti hai kai barr wo hatane ke liye we use () 
// to execute it at current 

//we need to end it ass well so we should put the semicolon when ussing iffe method explicitly 

((name)=>{
    //unnamed iffi 
    console.log(`db connected 2 ${name}`);
})('Sam');


//java script execution context 
// how java script executes files 
//two phases 
// 1) Global Execution Context (referred to this)
// in browser gec give window object as result 
// js is single threaded 
// 1)global execution context 
// 2)function execution context 
// eval execution context later on (property of global object )

// {} - > memory creation phase 
//    - > execution phase 

// file -> 
// let val1 = 10;
// let val2 = 5 
// funciton addNum(n1,n2){
//     let total = n1+n2
//     return total
// }
// let res1 = addNum(n1,n2)
// let res2 = addNum(10,2)

// 1) global execution -> allocated to this 

// 2) memory phase -> all variables are stored not thier values
// function goes with defination 
// but undefined 
// val 1 -> undefined 
// val 2 -> undefined 
// addNum -> defination 
// let res1 -> undefined 
// let res2 -> undefined 

// 3)execution phase 
// values are assigned 
// val1 = 10 
// val2 = 5 
// addNum -> (new variabl.env + execution thread )
// and iske ander memory phase and execution phase 
// memory phase 
// val1 - undefined
// val2 - undefined 
// total - undefined 
// execution context 
// num1 - 10 
// num2 - 5 
// total - 15 
// badd ye delete bhi hoga 

// res1 =15 

// res2 = now same dubara se repeat hoga ek aur box . new var env. + thread 
//memory phase , execution phase 


