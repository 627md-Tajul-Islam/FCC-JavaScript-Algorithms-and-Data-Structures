// Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };

  // Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
        "alpha" : "Adams", 
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    }    
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");