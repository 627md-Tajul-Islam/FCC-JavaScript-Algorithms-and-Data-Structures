// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
//This can be very useful for iterating through an object's properties or when accessing a lookup table.

/* 
Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed); */

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = 16;  
  const player = testObj[playerNumber];
  console.log(player)