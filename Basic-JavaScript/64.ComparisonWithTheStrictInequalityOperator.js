// The strict inequality operator (!==) is the logical opposite of the strict equality operator. 
//It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.
// The strict inequality operator will not convert data types.

/* 
3 !==  3  // false
3 is equal to 3. 

3 !== '3' // true
3 is a number and '3' is a string.

4 !==  3  // true 
4 is not equal to 3
*/

function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);