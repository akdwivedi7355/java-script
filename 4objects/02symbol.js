// creating of symbol
const mysym= Symbol("Key1")

const user={
    name:"Aditya ",
    age:18,
    [mysym]: "Adi",
    location:"Kanpur",
    email:"akdwivedi8090@gmail.com",
    isloggedin: false,
    lastlogin:["monday","tuesday"]
}
console.log(user[mysym])
console.log(user);