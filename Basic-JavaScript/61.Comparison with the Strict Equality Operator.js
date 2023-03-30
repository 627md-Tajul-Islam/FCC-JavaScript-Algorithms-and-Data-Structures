// Strict equality (===) is the counterpart to the equality operator (==).

/*
3 ===  3  // true
3 === '3' // false
*/
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);