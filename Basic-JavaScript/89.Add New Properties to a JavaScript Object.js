// You can add new properties to existing JavaScript objects the same way you would modify them.
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
 const newName = ourDog.bark = "bow-wow";

 const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  //console.log(myDog)
  
  const sound = myDog.bark = "woof";
  const race = myDog["race"] = "nigga";

  //console.log(sound)
  console.log(myDog)