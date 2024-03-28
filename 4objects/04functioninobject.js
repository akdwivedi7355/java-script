const user={
    name:"Aditya ",
    age:18,
    location:"Kanpur",
    email:"akdwivedi8090@gmail.com",
    isloggedin: false,
    lastlogin:["monday","tuesday"]
}

user.greeting=function(){
    console.log(`hello ${user.name}`);
}
console.log(user.greeting());