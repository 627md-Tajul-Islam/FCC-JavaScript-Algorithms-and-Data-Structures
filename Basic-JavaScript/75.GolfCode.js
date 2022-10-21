// Solution One
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
  golfScore(4, 2);

// Solution Two