// The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.


/*
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/

function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(12);