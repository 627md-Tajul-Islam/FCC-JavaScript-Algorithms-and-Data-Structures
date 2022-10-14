// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.

const array1 = [1,2,3];
array1.push(4);
//console.log(array1);

const array2 = [1,2,3];
array2.push("hello");
//console.log(array2);


const myArray = [["John", 23], ["cat", 2]];
//myArray[0].push(["dog", 3]);
myArray.push(["dog", 3]);
console.log(myArray);

