// singleton 
Object.create // ye wala alg tarika hai constructor ke dwara

// object literals 
//objects mein key or value dono define hote hain 
// arr mein nhi hote 

const mySym = Symbol("Key1")


const JsUser = {
    name: "Hitesh",
    "fullName":"Samyak Sharma",
    mySym:"MyKey1",
    [mySym]:"MyKey2",
    age: "18",
    location: "Jaipur",
    email: "Samyak@google.com",
    isLogIn: false,
    lastLogDay:["Mon","Sat"]
} // ye ban gaya object 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullName);
console.log(JsUser["fullName"]);
console.log(typeof(JsUser.mySym));
console.log(typeof JsUser[mySym])//symbol 

// interview question 
// define a symbol use tthat as a key in object and print the same . 
// ans -> to make the key as symbol it should be covered in the square brackets . otherwise it's a string .

JsUser.email = "sam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sam@microsoft.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello js User");
}
console.log(JsUser.greeting)//fucntion not getting executed just taken the reference 
console.log(JsUser.greeting());// function getting executed and printting the output 

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());

//keep in mind whenver accessing the values take dot. operator 
//but keep in mind in interviews some question where square brackets are important for the access like the symbol case . 

