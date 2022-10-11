// Bracket notation is a way to get a character at a specific index within a string.
// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.
//  the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstLetter);

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

let hello = "many";
let flon = hello.length;
let llon = hello[1];
console.log(flon);
console.log(llon);