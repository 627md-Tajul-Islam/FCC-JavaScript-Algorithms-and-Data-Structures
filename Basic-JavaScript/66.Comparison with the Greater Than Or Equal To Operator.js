// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

/*
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
*/

function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) { 
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);