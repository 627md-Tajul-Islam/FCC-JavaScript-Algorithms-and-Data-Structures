// .unshift() works exactly like .
// push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

const Array = ["Stimpson", "J", "cat"];
Array.shift();
Array.unshift("Hello");
console.log(Array);

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);