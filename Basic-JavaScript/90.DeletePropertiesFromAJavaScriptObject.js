// You can add new properties to existing JavaScript objects the same way you would modify them.
const jessore = {
    name : "jashore",
    location : "khulna"
}

const removed = delete jessore.location;
console.log(removed);
console.log(jessore);