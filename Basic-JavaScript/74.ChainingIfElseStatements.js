// if/else statements can be chained together for complex logic. 

/*
 if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
  . . .
  } else {
    statementN
  } 
  */

  function testSize(num) {
    if(num < 5){
      return "Tiny";
    }
    else if(num < 10){
      return "Small";
    }
    else if(num < 15){
      return "Medium";
    }
    else if(num < 20){
      return "Large";
    }
    else if(num >= 20){
      return "Huge";
    }
    else{
     return "Change Me";
    }
    }
    
    testSize(7);