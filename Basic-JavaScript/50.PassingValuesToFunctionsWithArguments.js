// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
// When a function is defined, it is typically defined along with one or more parameters. 
// The actual values that are input (or "passed") into a function when it is called are known as arguments.

function testFun(parameter1, parameter2) {
    console.log(parameter1,parameter2);
}
//testFun();
testFun("Tajul", "Islam");
testFun("Pratasha", "Islam");

function functionWithArgs(numberOne,numberTwo){
    console.log(parseInt(numberOne)+parseInt(numberTwo));
   }
   functionWithArgs(1,2);
   functionWithArgs(7,9);