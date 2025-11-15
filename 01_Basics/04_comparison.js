// console.log (2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);//t
// console.log("02">1);//f

console.log(null>0);//f
console.log(null==0);//f
console.log(null>=0);//t

console.log(undefined==0);//f
console.log(undefined>0);//f
console.log(undefined<0);//f

// === checkS Strictly
console.log(2==2)//t
console.log("2" === 2);//f

// comparision operators 
// == (loose equality)

// === (strict equality)

// != (loose inequality)

// !== (strict inequality)

// >

// <

// >=

// <=

// == performs type conversion before comparing 
// === no conversion prefer in real coding 

// rules 
// 1)number vs string //string converted to no 
// 2)boolean vs number //boolean converted to no 
// 3)null vs undefined //
// null==undefined //true 
// null===undefined //false 
// null >= 0   // true   (because null → 0)
// null > 0    // false
// null == 0   // false (no conversion here)
console.log(null===0)//f
// 4)object compared with primitives 
// objects get converted to primitives 


// interview question 
// why == dangerous ? 
// performs implicity conversions -> unpredictable 

//null and undefined 

console.log([]==0);//true
console.log("2">"12");//true //string comparison is lexical not numeric 


