function loginuser(username){
    if(!username){
        console.log("enter valid username");
        return ;
    }
    return `${username} logged succesfully`
}

console.log(loginuser("Aditya"));
console.log(loginuser());