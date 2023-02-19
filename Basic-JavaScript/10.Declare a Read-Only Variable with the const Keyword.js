// The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

/*
const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:
*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line