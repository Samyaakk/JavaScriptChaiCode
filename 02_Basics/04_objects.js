//constructor 
// const tinderUser  = new Object() //empty singleton object 
const tinderUser = {} // empty non-singleton object 
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLogIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Samyak",
            lastName: "Sharma"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstName);

// ? is used in betweeen like to check up if value exist or not to be safe 

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}


const obj3 = {obj1,obj2};//array awli problem like object ke andr objedct merge nhi hoga 
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

// we can put empty parenthesis as well iet's optioinal 

const obj5 = {5:"a",6:"b"};
const obj6 = Object.assign({},obj1,obj2,obj5);
console.log(obj6);

//but we don't use this regularly rather we use spread operator ... 

const obj7 = {...obj1,...obj2};
console.log(obj7);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "s@gmail.com"
    },
    {
        id:3,
        email: "k@gmail.com"
    }
]
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sam"
}

console.log(course.courseInstructor);

// another syntax to do the same 
const {courseInstructor:instructor} = course
// console.log(courseInstructor);//same ans
console.log(instructor);

//understanding react concept like why we do so ?? 
// instead of writing promps.company again & again we directly write {comapny}
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")
//this concept is also called destructuring . 


// json format with api understanding 
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]
