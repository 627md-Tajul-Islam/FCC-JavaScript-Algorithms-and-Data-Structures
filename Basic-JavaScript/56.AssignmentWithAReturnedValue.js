// everything to the right of the equal sign is resolved before the value is assigned. 
//This means we can take the return value of a function and assign it to a variable.

function addition(num1,num2){
 return num1+num2;
}
sum = addition(10,15);
console.log(sum);

// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)