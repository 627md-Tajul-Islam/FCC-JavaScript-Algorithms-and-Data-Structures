// Another use of bracket notation on objects is to access a property which is stored as the value of a variable.

const Tajul = {
    Name : "Tajul",
    ROll : 432568,
    Dept : "CMT"
}

const value = "Dept";
const other = Tajul[value];
console.log(other);