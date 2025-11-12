// (beginning of jan1 1970 )
//DATES 
// Note - > date is object in js 
let date = new Date()
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(typeof date)
//year indx starts with 0 in js 
let myCrDate = new Date(2023, 0, 23);
console.log(myCrDate.toDateString());

let cdate = new Date("2023-03-12")
console.log(cdate.toLocaleString());

//dynamic and current itme 
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(cdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

//string interpolation ${}

//defining the properties it hold 
newDate.toLocaleString('default',{
    weekday:"long"
});