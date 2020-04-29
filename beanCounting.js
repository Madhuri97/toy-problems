// Write a function countBs that takes a 
// string as its only argument and returns 
//a number that indicates how many uppercase 
// “B” characters there are in the string.
const countBs = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) == 'B') {
            count = count+1;
        }
    }
    return count;
  }; 
  console.log("Count of B's in given String is: ", countBs("Blinking Blindly, Brainy Bob Brings Beautiful Beer Bottles Beneath Blue Butterflies Billowing Brilliantly."));

  