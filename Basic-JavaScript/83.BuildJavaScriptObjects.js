// You may have heard the term object before.
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
//you access the data in objects through what are called properties.
// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

const Tajul = {
    "Name" : "Tajul Islam",
    "Roll" : 432568,
    "Address" : "Jessore",
    "School" : "Jessore Zilla School",
    "Enemies" : ["Kuf,ihud"]
}


const complex = {
    Car : "Ford",
    5 : "Number Five",
    "Model" : "focus"
}
console.log(complex);

// if your object has any non-string properties, JavaScript will automatically typecast them as strings.