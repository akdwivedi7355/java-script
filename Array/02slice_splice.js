const myArr= [0,1,2,3,4,5];

// slice=> It will return from the lower value to less then upper value. It will not manipulate the array
console.log("before slice");
console.log(myArr);
const MySlice= myArr.slice(1,3);
console.log("after slice ");
console.log(myArr);
console.log(MySlice);

// splice=> It will return from the lower value to upper value. It will  manipulate the array
console.log("before splice");
console.log(myArr);
const MySplice= myArr.splice(1,3);
console.log("after splice ");
console.log(myArr);
console.log(MySlice);