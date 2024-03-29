// scope refers to the visibility of variables

//  Variables which are defined outside of a function block have Global scope

//This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope.

// You should always declare your variables with let or const.

let myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}


function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}