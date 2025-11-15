// in js we can denote string in either single or double quotes
const name = "Samyak"
const repoCount = 50
console.log(name+repoCount+" Value");

//using backticks ie. string interpolation 
//modern way better way 
// advantage - > can be done on the way 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//declaring the string 
const gameName = new String("Samyak-sh")
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

//some functions methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

//some other methods 
const newString = gameName.substring(0,4);//value at idx 4 not included 
// note in substring we can't give negative value 
console.log(newString);

const anotherString  = gameName.slice(1,4);//we can give the -ve value here 
console.log(anotherString);

const s1 = "    SAmyak    "
console.log(s1)
console.log(s1.trim());

const url = "https://samyak.com/samyak%20sharma"
console.log(url.replace("%20","-"));

console.log(url.includes("samyak1"));

console.log(gameName.split('-'));

// concepts
//string enclosed in "" , '',`` 
//double quot , single quot , and backticks 
//strings are immutable 

//imp string methods 
console.log("hello".length)//5
console.log("hello".charAt(1))//e
console.log("helloa".charCodeAt(5))//ascci value 
console.log("hi".toUpperCase());
console.log(" hi ".trim());
console.log("abcdef".slice(1,4));//bcd

// diff in slice and substring is  that slice accept negative but substring don't 

console.log("hi hi".replace("hi","bye"))
//includes,startsWith,endsWith 
//split 
console.log("1,2,3".split(","));

// use backticks for expresion multiline string and val insertions 

// immutability  
let s = "hello"
s[0] = "H" //no hcange 
console.log(s)

//interview questions 
//string immutable any change creates a new string in memory 
//diff in slice and substring ie . -slice neg value also 
//rev in js 
console.log("abc".split("").reverse().join(""));
//string interpolation 
// ${expression} inside backticks 