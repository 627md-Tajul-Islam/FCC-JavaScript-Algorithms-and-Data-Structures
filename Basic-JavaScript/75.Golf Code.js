const names = 
[
    "Hole-in-one!", 
    "Eagle", 
    "Birdie", 
    "Par", 
    "Bogey", 
    "Double Bogey", 
    "Go Home!"
];

function golfScore(par, strokes) {
    var score = strokes - par;


        if (strokes === 1) {
          return "Hole-in-one!";
        } 
        
        else if (score <= -2) {
          return "Eagle";
        } 
        
        else if (score === -1) {
          return "Birdie";
        }
        
        else if (score === 0) {
          return "Par";
        }
        
        else if (score === 1) {
          return "Bogey";
        } 
        
        else if (score === 2) {
          return "Double Bogey";
        } 
        
        else {
          return "Go Home!";
        }
      
}

golfScore(5, 4);