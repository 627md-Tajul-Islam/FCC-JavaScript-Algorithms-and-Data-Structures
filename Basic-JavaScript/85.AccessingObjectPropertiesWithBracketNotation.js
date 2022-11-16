// The second way to access the properties of an object is bracket notation ([])
// However, you can still use bracket notation on object properties without spaces.

const myObject = {
    "Space Name" : "Space invaders",
     Space : "invaders"
}
const ok = myObject["Space Name"];
const not = myObject["Space"]
console.log(not);