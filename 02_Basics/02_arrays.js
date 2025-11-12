const mvh = ["thor","spider","hulk"];
const dch = ["bat","super"];
// mvh.push(dch)
// console.log(mvh);
// console.log(mvh[3][1]);

const arr = mvh.concat(dch)
console.log(arr);

//push just add to existing arr as complete arr 
// concat add the elements in that arr. but remember to take new arr 

//spread operator used when multiple pushing 
const all_new_heros = [...mvh,...dch]
console.log(all_new_heros);

const arrx = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const anarr = arrx.flat();//we can give the depth to which we want it to be made  flat 
console.log(anarr);

console.log(Array.isArray("Samyak"))
console.log(Array.from("Samyak"))
console.log(Array.isArray("Samyak"))

console.log(Array.from({name:"samyak"}))//intresting 

let s1 = 100 
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));