const myArr1=[0,1,2,3,5]
const myArr2=[9,8,7,6,5]

// concatination of two array
console.log("concatination of two array");
const myArr= myArr1.concat(myArr2)
console.log(myArr);

// other way to concate
console.log("other way to concate");
const mycon =[...myArr1 , ...myArr2];
console.log(mycon);

// if we perform push operation
myArr1.push(myArr2)
console.log(myArr1);