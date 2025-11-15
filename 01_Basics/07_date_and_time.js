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


//creating dates 
let d = new Date();
console.log(d);
let d2 = new Date("2025-02-10")
console.log(d2);
d.getFullYear();
d.getMonth();      // 0 - 11
d.getDate();       // day of month
d.getDay();        // 0 = Sunday
d.getHours();
d.getMinutes();
d.getSeconds();

console.log(d.getTime());


//imp interview based 
// month 0 based in js -> inheritied from ealry java
//coparing dates using 
// d1.getTime()>d2.getTime()
//finding diff btw 2 dates 
let diff = d2-d1;
let days = diff/(1000*60*60*24);

//compare new Date("dfsdfds")==new Date("dsfsd")//false objects 
