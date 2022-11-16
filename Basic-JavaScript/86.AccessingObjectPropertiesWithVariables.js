// Another use of bracket notation on objects is to access a property which is stored as the value of a variable.

const friends = {
    Name : "Tajul",
    Roll : 432568,
    School : "JZS"
}

const college = "Roll";
const output = friends[college];
console.log(output);