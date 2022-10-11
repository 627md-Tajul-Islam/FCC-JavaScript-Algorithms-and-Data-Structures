// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// this will throw a TypeError
var myStr = "Bob";
myStr[0] = "J";
console.log(myStr);

// Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:
let myStr2 = "Bob";
myStr2 = "Job";
console.log(myStr2);

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr= "Hello World";
console.log(myStr);