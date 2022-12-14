// Objects can be thought of as a key/value storage, like a dictionary. 
// If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain.

function phoneticLookup(val) {
    let result = "";
  
  const lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  }
  
  result = lookup[val];
  return result;
  }