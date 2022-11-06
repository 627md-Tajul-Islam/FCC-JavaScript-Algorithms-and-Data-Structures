// Sometimes it is useful to check if the property of a given object exists or not.
// We can use the .hasOwnProperty(prop name) method of objects to determine if that object has the given property name.
// .hasOwnProperty() returns true or false if the property is found or not.

const myObj = {
    top: "hat",
    bottom: "pants"
}

const ok = myObj.hasOwnProperty("top");
console.log(ok);

const ok2 = myObj.hasOwnProperty("middle");
console.log(ok2);

// The first hasOwnProperty returns true, while the second returns false.

function checkObj(obj, checkProp) {

    if(obj.hasOwnProperty(checkProp)) 
    {
      return obj[checkProp];
    }
    else
    {
      return "Not Found"
    }
    
  }