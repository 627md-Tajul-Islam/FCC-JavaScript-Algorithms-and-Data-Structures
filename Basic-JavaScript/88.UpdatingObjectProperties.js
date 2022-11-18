// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. 
//You can use either dot or bracket notation to update.

const doggo = {
    Name : "Dogesh",
    State : "KAnnada"
}

const updated = doggo.State = "Doge";
console.log(updated);
console.log(doggo);