function sayMyName(){
    console.log("Aditya Kumar Dwivedi");
}
sayMyName(); //Aditya Kumar Dwivedi


// Add two No.
function addNo(number1,number2){
    console.log(number1+number2);
    console.log(typeof(number1+number2));
}

addNo(3,4);  //7
addNo(3,"4"); //34
addNo("3",4);  //34
addNo(3 ,"a");  //3a
addNo(3,null); //3
addNo("3",null);



// multiple value
function calculateSum(...num){
    return num;
}

console.log(calculateSum(300,399,6764,87217,435,3883));
