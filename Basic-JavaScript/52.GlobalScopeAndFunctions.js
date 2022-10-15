// scope refers to the visibility of variables

// Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope.

// This can create unintended consequences elsewhere in your code or when running a function again.

// You should always declare your variables with let or const.

// Global scope: The variable is available throughout the code
//Local scope: Available in only a certain area (like only within function)
//Block scope: Available within an even more certain area (like an if-statement)

// When you add var before the variable name, its scope is determined by where it is placed. Like so:
/* 
var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}

// When you don’t, this is the result:
num1 = 18; // Global scope
function fun() {
  num2 = 20; // Global Scope
  if (true) {
    num3 = 22; // Global Scope
  }
}
*/

let num1 = 18;
function fun() {
    let num2 = 20; 
  if (true) {
    let num3 = 22; 
  }
}