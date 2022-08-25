//declaring variables with the var keyword is that you can easily overwrite variable declarations
var camper = "James";
var camper = "David";
console.log(camper);

// upper code section will throw an error cause the below section is running

//the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.

let camper = "James";
let campers = "David";
console.log(camper);
console.log(campers);

// এখানে মেইনলি ব্যাপার টা হচ্ছে যে let keyword ব্যাবহার করে একই নামে ২ টা ভেরিয়েবেল তৈরি করা পসিবল না। করলে ইরোর আসবে। 