// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
 let strArray = str.toLowerCase().split(' ');
 let capitalize = "";
 for (let i = 0; i < strArray.length; i++) {
    capitalize += strArray[i][0].toUpperCase() + strArray[i].substring(1);
    if (i < (strArray.length - 1)){
      capitalize += " ";
    }
 }
 return capitalize;
}

// testing
titleCase("I'm a little tea pot");
