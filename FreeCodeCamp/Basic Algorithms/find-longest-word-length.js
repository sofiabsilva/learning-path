// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
 // convert string to array of words
 const stringArr = str.split(' ');
 // To store the longest word while looping
 let word = stringArr[0];
 for (let i = 1; i < stringArr.length; i++){
   if (word.length <= stringArr[i].length){
     word = stringArr[i];
   }
 }
  return word.length;
}

//testing
findLongestWordLength("The quick brown fox jumped over the lazy dog");
