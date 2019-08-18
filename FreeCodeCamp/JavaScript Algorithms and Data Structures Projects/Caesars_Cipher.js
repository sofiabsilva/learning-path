/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { 
var arr = str.split('');
// map through array of letters 
var shifted = arr.map(function(l){
  // check if not a letter skip
  var regex = /[A-Z]/;
  if (!regex.test(l)) {
    return l;
  } else {
    // since 65 corresponds to ASCII of A, to have an index of 0 do this
    var charIndex = l.charCodeAt() - 65;
    // add 13 to index and wrap arround alphabet (26 letters), then add back the 65 to get the character
    return String.fromCharCode(((charIndex + 13) %26) + 65);
  }
}).join('');
return shifted;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");

// returns YOU DID IT!
