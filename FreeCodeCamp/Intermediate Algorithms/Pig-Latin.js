//Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var substring;
  // find the first vowel and then 
  var index= str.search(/[aeiou]/);
  // if it's the 1st letter
    if (index == 0) {
      return str + "way";
    } else if (index < 0) {
      // if there's no vowel
      return str + "ay";
      // if it's further away from the start, save consonants in substring
    } else {
      substring = str.substring(0, index) ; 
      // delete substring and add it at the end + "ay"
      var newStr = str.replace(substring, "");
      return newStr + substring + "ay"; 
    }
}

translatePigLatin("consonant");

// returns onsonantcay
