// The inequality operator (!=) is the opposite of the equality operator.
// It means not equal and returns false where equality would return true and vice versa.
// Like the equality operator, the inequality operator will convert data types of values while comparing.

/* 
1 !=  2 true 
1 is not equal to 2. 

1 != "1"  false
1 is a number and "1" is string.But their value is same.they are same

1 != '1'   false
1 is a number and "1" is string.But their value is same.they are same

1 != true   false
1 is always true. 1=true 0 means nothing. 


0 != false  false 
0 means nothing. 0 = false.

*/

function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);