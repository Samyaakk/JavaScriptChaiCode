// let a = 10
// const b =20
// var c  =30 

// {} - > scope 
// if(true){
//     let a  =10 
//     const b = 20 
//     var c = 30 
// }

// console.log(a);
// console.log(b);
// console.log(c);

// like the basic scoeps in other lnaguages 

function one(){
    const username = "Samyak"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
//closure property -> like outer scope can access inner scope variables . 

// *********************intresting concept *********************//
console.log(addone(5));
function addone(num){
    return num+1
}

const addTwo  =function(num){
    return num+2
}
addTwo(5)
//this is called hoisting weher we want to access befoer declaration 
//but when declared with variable we can't 
//understand it 
