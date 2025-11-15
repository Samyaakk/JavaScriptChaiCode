//for of 
//higher order function 

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
}
const greet = "Hello"
for(const g of greet){
    console.log(`Each char is ${g}`)
}


//Maps 
//no duplicate value only null 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map)
// maintains order and shows only unique values 

//printing map using for of loop 
// using key value 
for(const [key,value] of map){
    console.log(key,':-',value);
}


// so obj is not iteratable using for of loop 
const myObj = {
    'G1' :"NFS",
    'G2' :"spiderman"
}
for(const [key,value] of myObj){
    console.log(key,':-',value);
}


