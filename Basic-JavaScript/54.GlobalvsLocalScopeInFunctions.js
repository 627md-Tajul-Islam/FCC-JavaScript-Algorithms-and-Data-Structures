// It is possible to have both local and global variables with the same name.
//When you do this, the local variable takes precedence over the global variable.

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
console.log(someVar);
myFun();



const outerWear ="T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

console.log(outerWear);
myOutfit();