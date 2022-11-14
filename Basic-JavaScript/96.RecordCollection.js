// You are given an object literal representing a part of your musical album collection. 
// Each album has a unique id number as its key and several other properties. 
// Not all albums have complete information.

// You start with an updateRecords function that takes an 
//object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. 
//Complete the function using the rules below to modify the object passed to the function.

//Your function must always return the entire record collection object.
//If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//If value is an empty string, delete the given prop property from the album.
/*
After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
Waiting:After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
Waiting:After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
Waiting:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
Waiting:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
Waiting:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
Waiting:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
*/


Problem Explanation
For the given id parameter, which is associated with the records object:
* If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
* If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
* If value is an empty string, delete that prop from the object.

Finally, return records. 