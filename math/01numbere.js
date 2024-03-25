// declaration of a number 
const score =400;
console.log(score);
//as a object
const balance = new Number(3000);
console.log(balance);

// to string of a number 
console.log(balance.toString().length)


// precision
const otherNo = 123.4456;
console.log(otherNo.toPrecision(4));
console.log(otherNo.toPrecision(2));


//  representation of number inn currency or number system 
const humdreads= 1000000;
console.log(humdreads.toLocaleString('en-IN'));