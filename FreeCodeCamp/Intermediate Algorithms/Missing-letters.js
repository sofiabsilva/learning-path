/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  // get 1st charcode of str and loop to see if the next one is different, if so return the letter that should be next. 
let charCode = str.charCodeAt(0); 
  for (var i= 1; i < str.length; i++) {
    if (str.charCodeAt(i) != (charCode + i)) {
      return String.fromCharCode(charCode + i);
    }
  }
return undefined;
}

fearNotLetter("abce");
// returns d
