//When JavaScript variables are declared, they have an initial value of undefined. 
var a;
console.log(a);

var undefined;
console.log(undefined);

//If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
var undefined;
var undefined;
console.log(undefined+undefined);

var a = 5;
var undefined;
c = a + undefined;
console.log(c);

//If you concatenate a string with an undefined variable, you will get a string of undefined. 

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);