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

  console.log("----------------------------------------------")
  
//write a function called countChar that behaves 
// like countBs, except it takes a second argument 
// that indicates the character that is to be counted 
// (rather than counting only uppercase “B” characters). 
// Rewrite countBs to make use of this new function.
function countChar(s,l) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if (s.charAt(i) == l) {
            count = count +1;
        }
    }
    return count;
}
console.log("Count of given letter in the given string is", countChar("Blinking Blindly, Brainy Bob Brings Beautiful Beer Bottles Beneath Blue Butterflies Billowing Brilliantly.",'i'));
