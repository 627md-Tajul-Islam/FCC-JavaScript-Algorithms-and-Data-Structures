// A function can include the return statement but it does not have to.
// In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

// this will return undefined
let sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);

// this will return the normal value
let sum1 = 0;
function addSum(number) {
  return sum1 + number;
}
addSum(3);

// Setup
let sum = 0;
function addThree(sum) {
  sum = sum + 3;
}
function addFive(sum) {
  sum = sum + 5;
}

addThree(5);

addFive(3);