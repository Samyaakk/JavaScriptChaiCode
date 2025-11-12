//arrays 
const myArr = [0,1,2,3,4,5,true,"hitesh"]
//mixed data types allowed 
console.log(myArr[0]);
//shallow copy  properties share the same memory 
//deep copy properties don't share the same memory 

const myHero = ["Salman","sharukh","akshay","ritik"];
const arr = new Array(1,2,3,4)

//array methods 
myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const nArr = myArr.join()
console.log(myArr);
console.log(nArr);
console.log(typeof(myArr));
console.log(typeof(nArr));

//slice , splice 
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//slice just give you the value 
//splice gives you the value but also deletes it from the main arr and provide the last value as well 
