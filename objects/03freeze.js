const user={
    name:"Aditya ",
    age:18,
    location:"Kanpur",
    email:"akdwivedi8090@gmail.com",
    isloggedin: false,
    lastlogin:["monday","tuesday"]
}

user.location="Unnao";

console.log(user);
Object.freeze(user);
user.location="allahabad";
console.log(user);
