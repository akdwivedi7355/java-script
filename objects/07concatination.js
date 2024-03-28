const obj1= { 1: "a" , 2 :"b"};
const obj2= { 3:"a" , 4 :"b"};

const obj3={obj1,obj2};
const obj4={...obj1,...obj2}
const obj5=Object.assign({},obj1,obj2)

console.log("object 3 ",obj3);
console.log("object 4 ",obj4);
console.log("object 5 ",obj5);;