// object can be created by two method
// 1.constructor(singleton)
// 2.literal(NON-singleton)

//  literal object
const user={
    name:"Aditya ",
    age:18,
    location:"Kanpur",
    email:"akdwivedi8090@gmail.com",
    isloggedin: false,
    lastlogin:["monday","tuesday"]
}

// console.log(user);

// // modification of objects
// user.age=21;
// user.location="Unnao"

// console.log(user);

// other way to access
console.log(user["email"]);