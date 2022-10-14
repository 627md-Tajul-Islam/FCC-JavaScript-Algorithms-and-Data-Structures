//Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.
// .pop() removes the last element from an array and returns that element.
// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArray = [1,2,3,4,5];
const removeLast = threeArray.pop();
console.log(threeArray);
console.log(removeLast);