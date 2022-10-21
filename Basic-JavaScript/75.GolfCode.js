/* // Solution One
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
// one
 if(strokes == 1){
   return "Hole-in-one!";
 }
// two
 else if(strokes <= par - 2 ){
   return "Eagle";
 }
// three 
else if(strokes == par - 1 ){
   return "Birdie";
 }
 // four 
 else if(strokes == par  ){
   return "Par";
 }
 // five
 else if(strokes == par + 1 ){
   return "Bogey";
 }
 // six
 else if(strokes == par + 2 ){
   return "Double Bogey";
 }
 // seven
 else if(strokes >= par + 3 ){
   return "Go Home!";
 } else{
 return "Change Me";
 }
}
//golfScore(par, strokes)
  golfScore(4, 2); */


/* // Solution Two
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function  golfScore(par, strokes) { 
    // one 
    if (strokes == 1){
        return names[0];
    }
    // two 
    else if(strokes <= par - 2){
      return names[1];
    }
    // three
    else if(strokes === par - 2){
      return names[2];
    }
    // four
    else if(strokes === par){
      return names[3];
    }
    // five
    else if(strokes === par + 1){
      return names[4];
    }
    // six
    else if(strokes === par + 2){
      return names[5];
    }
    // seven
    else if(strokes >= par + 3){
      return names[6];
    }
 } */

 // Solution Three
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function  golfScore(par, strokes){
  return strokes === 1 
  ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}
//golfScore(par, strokes)
golfScore(4, 2);