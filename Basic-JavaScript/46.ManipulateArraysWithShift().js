// pop() always removes the last element of an array
// shift() removes the first element instead of the last
//Use the .shift() function to remove the first item from myArray

const Array = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = Array.shift();
console.log(removedFromOurArray);
console.log(Array);

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();