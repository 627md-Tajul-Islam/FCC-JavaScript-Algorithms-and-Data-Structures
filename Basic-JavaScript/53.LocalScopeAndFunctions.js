// Variables which are declared within a function, as well as the function parameters, have local scope.
//That means they are only visible within that function.

function Test(){
    const lock = "this is locked";
    console.log(lock);
}

Test();

console.log(lock);

function myLocalScope() {
    // Only change code below this line
  const myVar = "hello";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);