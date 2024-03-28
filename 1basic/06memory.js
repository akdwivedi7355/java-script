// stack and heap memory


// stack memory
let name=" Aditya";
let namely= name;
console.log(namely);
namely ="dwivedi";
console.log(namely);
console.log(name);


// heap memory
let username={
    email: "user@gmail.com",
    upi: " user@gmail.com"
}
console.log(username.email);
let aditya=username
aditya.email="Aditya@gmail.com";
console.log(aditya.email);
console.log(username.email);