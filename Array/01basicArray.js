const myArr= [1,2,'a','Aditya']
console.log(myArr);

//  adding of element in the last
myArr.push("last value");
console.log(myArr);

// deleting of element int last
myArr.pop();
console.log(myArr);

// adding of element in front
myArr.unshift("front value");
console.log(myArr);

// deleting of element in the front
myArr.shift();
console.log(myArr);


// check value present or not
console.log(myArr.includes("Aditya"));
console.log(myArr.includes(9));

// check index is present or not
console.log(myArr.indexOf(2));
console.log(myArr.indexOf(6));

// convert  array  into string
const myStr= myArr.join();
console.log(myStr);


// array from a string 
const arr=Array.from("ADITYA");
console.log(arr);

//  array from various variable
const score1=100;
const score2=200;
const score3=300;
const arry=Array.of(score1,score2,score3)
console.log(arry);